<template>
  <div>
    <div class="header">
      <!-- <a href="#" @click="$router.back()"><em></em></a> -->
      <go-back></go-back>

      <h3>注册</h3>
      <v-menu></v-menu>
      <!-- <p class="menu">
        <span></span>
        <span></span>
        <span></span>
      </p> -->
    </div>
    <!-- main -->
    <div class="main">
      <div class="name">昵称<input type="text" v-model="user.nickname" /></div>
      <div class="telphone">手机号<input type="text" v-model="user.phone" /></div>
      <div class="pwd">密码<input type="password" v-model="user.password" /></div>
      <div class="yanzhengma">
        验证码<input type="text" v-model="user.yanzhengma" />
        <span>重新发送</span>
      </div>
      <div class="xieyi">
        <input type="checkbox" v-model="user.xieyi" />我已阅读并同意以下条款
      </div>

      <div>
        <button class="btn" @click="next">下一步</button>
      </div>
    </div>
  </div>
</template>

<script>
import {getRegister} from '../../until/axios'
export default {
  data() {
    return {
      user: {
        nickname: "",
        phone: "",
        pwd: "",
        password: "",
        xieyi: [],
      },
    };
  },

  methods: {
    next() {
      getRegister(this.user)
      .then(res=>{
        console.log(res)
      })
      // if (
      //   this.user.uname == "" ||
      //   this.user.tel == "" ||
      //   this.user.pwd == "" ||
      //   this.user.yanzhengma == ""
      // ) {
      //   alert("请输入必填信息");
      // } else {
      //   console.log(this.user);
      //   localStorage.setItem("use", JSON.stringify(this.user));
      // }
    },
  },
};
</script>

<style lang="" scoped>
@import "../../assets/css/register.css";
</style>