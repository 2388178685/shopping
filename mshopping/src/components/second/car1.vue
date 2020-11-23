<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar
      @click-left="$router.back()"
      :title="$route.meta.name"
      left-text="返回"
      left-arrow
    >
    </van-nav-bar>
    <!-- 滑动单元格 -->
    <div v-if="cartList.length > 0 && userInfo">
      <div class="cartInfo" v-for="item in cartList" :key="item.id">
        <van-checkbox></van-checkbox>
        <van-swipe-cell>
          <van-card
            :num="item.num"
            :price="item.price.toFixed(2)"
            desc="描述信息"
            :title="item.goodsname"
            class="goods-card"
            :thumb="
              item.img
                ? $imgUrl + item.img
                : 'https://bpic.588ku.com/element_pic/19/03/12/e24240866df0a4be7ca577be81c94dd3.jpg'
            "
          >
            <template #footer>
              <div>
                <van-stepper
                  v-model="goodsNum"
                  theme="round"
                  button-size="22"
                  disable-input
                />
              </div>
            </template>
          </van-card>
          <template #right>
            <van-button
              square
              text="删除"
              type="danger"
              class="delete-button"
            />
          </template>
        </van-swipe-cell>
        <!-- 底部提交订单栏 -->
        <van-submit-bar :price="3050" button-text="提交订单" @submit="goOrder">
          <van-checkbox>全选</van-checkbox>
        </van-submit-bar>
      </div>
    </div>
    <div v-else-if="cartList.length == 0 && userInfo">
      <van-empty description="购物车空空如也，快去买买买！！！" />
    </div>
    <div v-else>
      <van-button @click="$router.push('/login')" type="warning"
        >请先登录，再查看</van-button
      >
    </div>
  </div>
</template>

<script>
import { getCartList, getCartDelete } from "../../until/axios";
export default {
  data() {
    return {
      goodsNum: 1,
      cartList: [],
      userInfo: ""
    };
  },
  mounted() {
    this.userInfo = sessionStorage.getItem("userInfo")
      ? JSON.parse(sessionStorage.getItem("userInfo"))
      : "";
    //组件加载调取购物车
    this.cartListInfo();
  },
  methods: {
    //封装获取列表接口
    cartListInfo() {
      getCartList({
        uid: this.$route.query.id
      }).then(res => {
        console.log(res, "购物车列表");
        if (res.code == 200) {
          this.cartList = res.list;
        }
      });
    },
    //提交订单页
    goOrder() {}
  }
};
</script>

<style lang="" scoped>
.goods-card {
  margin: 0;
  background-color: #fff;
}

.delete-button {
  height: 100%;
}
.cartInfo {
  display: flex;
}
.van-swipe-cell {
  flex: 1;
}
.van-checkbox {
  padding-left: 15px;
  width: 20px;
}
</style>
