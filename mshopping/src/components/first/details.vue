<template>
  <div class="page">
    <div class="header">
      <!-- <a href="#"><em></em></a> -->
      <go-back></go-back>
      <h3>商品详情</h3>
      <!-- <p class="menu">
        <span></span>
        <span></span>
        <span></span>
      </p> -->
      <v-menu></v-menu>
    </div>

    <div class="main">
      <div class="top">
        <!-- <img src="../../assets/images/picDetail_1.jpg" alt="pic" /> -->
        <img
          class="img"
          :src="
            goodsInfo.img
              ? $imgUrl + goodsInfo.img
              : 'https://bpic.588ku.com/element_pic/19/03/12/e24240866df0a4be7ca577be81c94dd3.jpg'
          "
          alt="pic"
        />
        <h5>{{ goodsInfo.goodsname }}</h5>
        <p>
          &yen;{{ goodsInfo.price }}<span>(此价格不与套装优惠同时使用)</span>
        </p>
      </div>
      <div class="shuxing">
        <p>
          促销：<a href="#">满减</a><span>满两件9折，三件八折</span> <em></em>
        </p>
        <div class="num">
          <p>购买数量</p>
          <div class="number">
            <div>-</div>
            <input type="text" />
            <div>+</div>
          </div>
        </div>
        <div class="shu">
          <h3>商品属性</h3>
          <p>
            {{ goodsInfo.specsname }}
            <a href="#" class="active" v-for="item in specsAttr" :key="item">{{
              item
            }}</a>
          </p>
        </div>
      </div>
    </div>
    <div class="details">
      <h3>商品详情</h3>
      <p v-html="goodsInfo.description"></p>
    </div>
    <div class="foot">
      <h3>商品评价</h3>
      <p class="m">1235668fg</p>
      <p class="on">效果很好，物流到位，下次继续来</p>
      <div class="pice">
        <img src="../../assets/images/picDetail_8.jpg" alt="pic" />
        <img src="../../assets/images/picDetail_9.jpg" alt="pic" />
        <img src="../../assets/images/picDetail_10.jpg" alt="pic" />
      </div>
      <p class="time">2020-02-13</p>
      <div class="flex">
        <p>共1000+条评论</p>
        <p>查看更多<em></em></p>
      </div>
    </div>
    <div class="bottom">
      <a href="#" class="news">
        <img src="../../assets/images/iconCart.jpg" alt="PIC" />
        <p>购物车</p>
        <em>2</em>
      </a>
      <a href="#" class="back" @click="goCart">加入购物车</a>
      <a href="#" class="back pink" @click="buy">立即购买</a>
    </div>
  </div>
</template>

<script>
import { getGoodsInfo, getCartAdd } from "../../until/axios";
import { Toast } from "vant";
export default {
  data() {
    return {
      goodsInfo: "",
      specsAttr: [],
      value: 1,
      check:false
    };
  },
  mounted() {
    this.getInfo();
     console.log(JSON.parse(sessionStorage.getItem("userInfo")).uid,this.goodsInfo.id,this.value)
  },
  methods: {
    getInfo() {
      getGoodsInfo({
        id: this.$route.query.id,
      }).then((res) => {
        console.log(res)
        if (res.code == 200) {
          this.goodsInfo = res.list[0];
          this.specsAttr = this.goodsInfo.specsattr
            ? this.goodsInfo.specsattr.split(",")
            : [];
          // console.log(this.goodsInfo.id);
        }
      });
    },
    buy() {
      this.$router.push({
        path: "/order",
        query: {},
      });
    },
    goCart() {
      
      if (sessionStorage.getItem("userInfo")) {
    
        //已登录 调取加入购物车接口，并跳转到购物车列表
        getCartAdd({
          uid: JSON.parse(sessionStorage.getItem("userInfo")).uid,
          goodsid: this.goodsInfo.id,
          num: this.value,
       
        }).then((res) => {
          console.log(res);
          Toast.success(res.msg);
          this.$router.push({
            path: "/car",
            query: {
              id: JSON.parse(sessionStorage.getItem("userInfo")).uid,
            
            },
          });
        });
      } else {
        Toast.fail("当前为登录，请先登录");
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style lang="" scoped>
@import "../../assets/css/details.css";
</style>