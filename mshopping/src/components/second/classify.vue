<template>
  <div class="page">
    <div class="header">
      <!-- <a href="#"><em></em></a> -->
      <go-back></go-back>

      <h3>商品分类</h3>

      <!-- <p class="menu">
        <span></span>
        <span></span>
        <span></span>
      </p> -->
      <v-menu></v-menu>
    </div>

    <!-- main -->
    <div class="main">
      <van-sidebar v-model="activeKey" @change="onChange">
        <van-sidebar-item v-for='item in firstList' :key='item.id' :title="item.catename" />
      </van-sidebar>
      <van-grid :border="false" :column-num="3">
        <van-grid-item :to="'/list?id='+item.id" v-for='item in secondList' :key='item.id'>
          <van-image :src="item.img ? $imgUrl+item.img :'https://img.yzcdn.cn/vant/apple-1.jpg'" />
          <span class="title">{{item.catename}}</span>
        </van-grid-item>
      </van-grid>
      
    </div>
  </div>
</template>

<script>
import { getCateTree } from "../../until/axios";
export default {
  data() {
    return {
      activeKey: 0,
      firstList:[],
      secondList:[]
    };
  },
  mounted() {
    console.log(this.getCateTreeList(),'1233')
    this.getCateTreeList();
  },

  methods: {
    // 获取分类树形结构
    getCateTreeList() {
      getCateTree().then((res) => {
        console.log(res, "分类树结构");
          if (res.code == 200) {
            this.firstList = res.list;
            this.secondList = res.list[this.activeKey].children;
            console.log(res.list[this.activeKey].children)
          }
      });
    },

    // 侧边栏change事件
    onChange(e) {
      console.log(e);
      this.secondList = this.firstList[e].children
    },
  },
};
</script>

<style lang="" scoped>
@import "../../assets/css/classify.css";
.cateInfo{
display: flex;
}
.van-grid{
    flex:1
}
.title{
    font-size: 14px;
}
</style>