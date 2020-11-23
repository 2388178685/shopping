<template>
  <div class="page">
    <div class="header">
      <!-- <a href="#"><em></em></a> -->
      <go-back></go-back>

      <h3>购物车</h3>
      <v-menu></v-menu>

      <!-- <p class="menu">
                <span></span>
                <span></span>
                <span></span>
            </p> -->
    </div>
    <ul class="main">
      <li
        v-for="(item, index) in list"
        :key="item.id"
        @touchmove="hua(index)"
        :class="[index == num ? 'two' : 'three']"
      >
        <div class="active">
          {{ check[index] }}
          <em :class="[check[index] ? 'check' : '']" @click="a(index)"></em>
          <img
            :src="
              list.img
                ? $imgUrl + list.img
                : 'https://bpic.588ku.com/element_pic/19/03/12/e24240866df0a4be7ca577be81c94dd3.jpg'
            "
            alt="pic"
          />
          <div class="text">
            <p class="shop">{{ item.goodName }}</p>
            <p class="gui">
              规格：<span>{{ item.guige }}g</span>
            </p>
            <p class="price">&yen;{{ item.price }}</p>
          </div>
          <div class="number">
            <div @click="jian(index)">-</div>
            <input type="text" :placeholder="item.num" />
            <div @click="add(index)">+</div>
          </div>
        </div>
        <div class="delete" @click="del(index)">删除</div>
      </li>
    </ul>
    <!-- pay -->
    <div class="pay">
      <div class="select">
        <em @click="checkAll" :class="[all ? 'all' : '']"></em>
        <span>全选</span>
      </div>
      <div class="pri">
        <p>
          总计：<span>&yen;{{ addAll }}</span>
        </p>
        <p class="you">不含运费，以优惠0.00元</p>
      </div>
      <div class="suan">
        <a href="#" @click="goOrder">结算</a>
      </div>
    </div>
  </div>
</template>

<script>
import { getCartList, getCartDelete } from "../../until/axios";

export default {
  data() {
    return {
      num: 5,
      all: false,
      // check: [false, false, false],
      check:[],
      list: [],
      newArr: [],
    };
  },
  mounted() {
    this.userInfo = sessionStorage.getItem("userInfo")
      ? JSON.parse(sessionStorage.getItem("userInfo"))
      : "";
    //组件加载调取购物车
    this.cartListInfo();
    this.getcheck();
  },

  watch: {},
  methods: {
    getcheck() {
      this.$set(this.list, this.check, false);
    },
    //封装获取列表接口
    cartListInfo() {
      getCartList({
        uid: this.$route.query.id,
      }).then((res) => {
        console.log(res, "购物车列表");
        if (res.code == 200) {
          this.list = res.list;
          this.list.forEach((item) => {});
          // this.list[0].a=1
          //  console.log(this.list[0].a);
          //   for (let i in this.list) {
          //     this.list[i].check = false;
          //     console.log(this.list);
          //   }
        }
      });
    },
    hua(i) {
      this.num = i;
    },
    del(id) {
      getCartDelete({
        id,
      }).then((res) => {
        console.log(res);
        this.list.splice(i, 1);
        this.num = null;
        console.log(this);
        this.all = this.list.every((item) => {
          return item.check;
        });
      });
    },
    jian(i) {
      console.log("123");
      if (this.list[i].num <= 0) {
        return;
      }
      this.list[i].num--;
    },
    add(i) {
      this.list[i].num++;
    },
    a(i) {
      // this.$set(this.check, this.check[i], !this.check[i]);
      this.check.splice(i, 1, !this.check[i]);
      this.all = this.check.every((item) => item);
    },
    checkAll() {
      this.all = !this.all;

      this.list.forEach((item, index) => {
        this.check[index] = this.all;
      });
    },
    goOrder() {
      this.$router.push("/order");
    },
  },
  computed: {
    checkinfo() {
      this.list.forEach((item, index) => {
        this.check[index] = false;
      });
      return this.check
    },


    addAll() {
      let sum = 0;
      this.list.map((item, index, err) => {
        if (this.check[index]) {
          sum += item.num * item.price;
          // console.log(1);
          return;
        }
      });
      return sum;
    },
  },
};
</script>

<style lang="" scoped>
@import "../../assets/css/car.css";
</style>