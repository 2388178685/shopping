<template>
  <div class="page">
    <div class="header">
      <!-- <a href="#"><em></em></a> -->
      <go-back></go-back>
      <h3>我的订单</h3>
      <!-- <p class="menu">
        <span></span>
        <span></span>
        <span></span>
      </p> -->
      <v-menu></v-menu>
    </div>
    <div class="top">
      <div class="niu">
        <img src="../../assets/images/mine.png" alt="pic" />
      </div>
      <div class="text">
        <p>悠溯</p>
        <p class="ji">v1</p>
      </div>
      <a href="#">每日签到</a>
    </div>
    <div class="banner">
      <div class="nav">
        <em></em>
        <p>全部订单</p>
      </div>
      <div class="nav">
        <em class="two"></em>
        <p>全部订单</p>
      </div>
      <div class="nav">
        <em class="three"></em>
        <p>全部订单</p>
      </div>
    </div>
    <ul class="main">
      <li>
        <div class="txt">
          <em class="icon"></em>
          <p>地址管理</p>
        </div>
        <em class="jian"></em>
      </li>
      <li>
        <div class="txt">
          <em class="icon two"></em>
          <p>我的钱包</p>
          <span>200余额</span>
        </div>

        <em class="jian"></em>
      </li>
      <li>
        <div class="txt">
          <em class="icon three"></em>
          <p>我的优惠券</p>
        </div>
        <em class="jian"></em>
      </li>
      <li>
        <div class="txt">
          <em class="icon four"></em>
          <p>我的二维码</p>
        </div>
        <em class="jian"></em>
      </li>
      <li>
        <div class="txt">
          <em class="icon five"></em>
          <p>我的小伙伴</p>
        </div>
        <em class="jian"></em>
      </li>
      <li>
        <div class="txt" @click="quit()">
          <em class="icon five"></em>
          <p>退出登录</p>
        </div>
        <em class="jian"></em>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    quit() {
      sessionStorage.removeItem("userInfo");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="" scoped>
@import "../../assets/css/my.css";
</style>