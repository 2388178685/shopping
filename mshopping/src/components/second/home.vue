<template>
  <div class="page">
    <div class="header">
      <a class="logo" href="javascript:;">
        <img src="../../assets/images/logo.jpg" alt="#" />
      </a>
      <input type="search" placeholder="寻找商品" />
      <p class="menu">
        <span></span>
        <span></span>
        <span></span>
      </p>
      <!-- <v-menu></v-menu> -->
    </div>
    <!-- 导航 -->
    <div class="nav">
      <ul class="clearfix">
        <li class="active"><a href="#">推荐</a></li>
        <li><a href="#">女装</a></li>
        <li><a href="#">鞋包</a></li>
        <li><a href="#">居家</a></li>
        <li><a href="#">母婴儿童</a></li>
        <li><a href="#">美食</a></li>
        <li><a href="#">推荐</a></li>
        <li><a href="#">推荐</a></li>
      </ul>
      <p>
        <em></em>
      </p>
    </div>
    <!-- banner -->
    <!-- <div class="banner">
            <img src="../../assets/images/banner.jpg" alt="pic">
        </div> -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in bannerList" :key="item.id">
        <img class="img" :src="$imgUrl + item.img" alt="" />
      </van-swipe-item>
    </van-swipe>
    <!-- 菜单 -->
    <div class="imenu">
      <ul>
        <li>
          <a href="#">
            <img src="../../assets/images/indexicon1.jpg" alt="pic" />
            <p>限时抢购</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/images/indexicon2.jpg" alt="pic" />
            <p>积分商城</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/images/indexicon3.jpg" alt="pic" />
            <p>联系我们</p>
          </a>
        </li>
        <li>
          <a href="javascript:;" @click='$router.push("/classify")'>
            <img src="../../assets/images/indexicon4.jpg" alt="pic" />
            <p>商品分类</p>
          </a>
        </li>
      </ul>
    </div>
    <!-- 限时抢购 -->
    <div class="limit">
      <div class="left">
        <h5><em></em>限时抢购</h5>
        <p>每天领零点场 好货秒不停</p>
        <div class="time">
          <span class="black">02</span>
          <span>:</span>
          <span class="black">16</span>
          <span>:</span>
          <span class="black">45</span>
          <span class="min">秒杀</span>
        </div>
        <div class="shop">
          <img src="../../assets/images/shop_5.jpg" alt="pic" />
          <div class="price">&yen;14.8</div>
        </div>
      </div>
      <div class="right">
        <div class="top clearfix">
          <div class="text">
            <h5>品牌上新 <span>折</span></h5>
            <p>每日九点 抢大牌</p>
            <em></em>
          </div>
          <a href="javascript:;">
            <img src="../../assets/images/indexshop.jpg" alt="" />
          </a>
        </div>
        <div class="bottom clearfix">
          <div class="left">
            <h5>每日十件</h5>
            <p>只为你选好货</p>
            <a href="#">
              <img src="../../assets/images/indexship2.jpg" alt="pic" />
            </a>
          </div>
          <div class="left bord0">
            <h5>拼啊</h5>
            <p>超级好货拼团</p>
            <a href="#">
              <img src="../../assets/images/indexship2.jpg" alt="pic" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- 广告 -->
    <a href="#" class="ad">
      <img src="../../assets/images/bar.jpg" alt="pic" />
    </a>
    <!-- main -->
    <div class="main">
      <van-tabs v-model="active">
        <van-tab title="发现新品">
          <van-card
            v-for="item in newsList"
            :key="item.id"
            num="2"
            price="2.00"
            desc="描述信息"
            :title="item.goodsname"
            :thumb="
              item.img
                ? $imgUrl + item.img
                : 'https://img.yzcdn.cn/vant/ipad.jpeg'
            "
          />
        </van-tab>
        <van-tab title="热门推荐">
            <van-card
            v-for="item in newsList"
            :key="item.id"
            num="2"
            price="2.00"
            desc="描述信息"
            :title="item.hotsname"
            :thumb="
              item.img
                ? $imgUrl + item.img
                : 'https://img.yzcdn.cn/vant/ipad.jpeg'
            "
          />
        </van-tab>
        <van-tab title="全部商品">
            <van-card
            v-for="item in goodsList"
            :key="item.id"
            num="2"
            price="2.00"
            desc="描述信息"
            :title="item.goodsname"
            :thumb="
              item.img
                ? $imgUrl + item.img
                : 'https://img.yzcdn.cn/vant/ipad.jpeg'
            "
          />
        </van-tab>
        
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { getBanner ,getIndexGoods} from "../../until/axios";
export default {
  data() {
    return {
      active: 0,

      bannerList: [],
      newsList: [],
      hotsList: [],
      goodsList: [],
    };
  },
  mounted() {
    //组件加载获取轮播图接口
    this.getBannerList();
    // 加载商品
    this.getIndexGoodsList();
  },
  methods: {
    // 调取轮播图接口
    getBannerList() {
      getBanner().then((res) => {
        console.log(res, "响应");
        if (res.code == 200) {
          this.bannerList = res.list;
        }
      });
    },

    //封装获取商品信息
    getIndexGoodsList() {
      getIndexGoods().then((res) => {
          console.log(res, "商品信息");
        if (res.code == 200) {
          this.newsList = res.list[0].content;
          this.hotsList = res.list[1].content;
          this.goodsList = res.list[2].content;
        }
        
      });
    },
  },
};
</script>

<style lang="" scoped>
@import "../../assets/css/index.css";
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  height: 2.9rem;
  text-align: center;
  background-color: #39a9ed;
}
.img {
  width: 100%;
  height: 2.9rem;
}
</style>