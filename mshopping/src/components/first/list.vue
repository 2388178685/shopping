<template>
  <div>
    <div class="header">
      <a href="#" class="jiantoul" @click="$router.back()"></a>
      <a href="index.html" class="logo"
        ><img src="../../assets/images/logo.jpg" alt="#"
      /></a>
      <v-menu></v-menu>
      <!-- <p class="menu">
        <span></span>
        <span></span>
        <span></span>
      </p> -->
    </div>
    <!-- search -->
    <div class="find">
      <em></em><input type="search" class="search" placeholder="搜索商品" />
    </div>
    <!-- main -->
    <div class="main">
      <van-list>
      <van-card
      @click='goDetail(item.id)'
        v-for="item in goodsList"
        :key="item.id"
        desc="这个商品是爆款"
        :price="item.price.toFixed(2)"
        :title="item.goodsname"
        :thumb="
          item.img
            ? $imgUrl + item.img
            : 'https://bpic.588ku.com/element_pic/19/03/12/e24240866df0a4be7ca577be81c94dd3.jpg'
        "
      />
    </van-list>

    </div>
  </div>
</template>

<script>

import {getGoods} from '../../until/axios'
export default {
  data() {
    return {
      goodsList: []
    }
  },
  mounted(){
    this.getGoodsList()
    // console.log(this.$route.query.id)
  },

  methods:{
    getGoodsList(){
      getGoods({
         fid: this.$route.query.id
      }).then(res=>{
        console.log(res)
        if(res.code==200){
          this.goodsList = res.list
        }
      })
    },
    goDetail(id){
      this.$router.push({
        path:'/details',
        query:{
          id
        }
      })
    }


  },
  
};
</script>

<style lang="" scoped>
@import "../../assets/css/list.css";
</style>