<template>
  <div>
    <div class="footer">
      <router-link to="/home" active-class="select">
        <span class="iconfont icon-shouye" ></span>

        <p class="active">首页</p>
      </router-link>

      <router-link to="/car"  active-class="select">
        <span class="iconfont icon-gouwuche"></span>

        <p>购物车</p>
      </router-link>

      <router-link to="/mine" active-class="select">
        <span class="iconfont icon-wode"></span>

        <p>我的</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import "../../assets/css/public.css";
export default {};
</script>

<style lang="" scoped>
</style>