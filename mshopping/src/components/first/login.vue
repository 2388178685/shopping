<template>
  <div>
    <div class="header">
      <go-back></go-back>

      <h3>登录</h3>

      <!-- <p class="menu">
        <span></span>
        <span></span>
        <span></span>
      </p> -->
      <v-menu></v-menu>
    </div>
    <!-- main -->
    <div class="main">
      <div class="telphone">手机号<input type="text" v-model="loginInfo.phone" /></div>
      <div class="pwd">密码<input type="password" v-model="loginInfo.password" /></div>
      <a href="javascript:;">忘记密码</a>
      <a href="javascript:;" @click="register()">注册</a>
      <div>
        <button class="btn" @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import {getLogin} from '../../until/axios'
import {Toast} from 'vant'
export default {
  data() {
    return {
      loginInfo: {
        phone: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
       getLogin(this.loginInfo)
          .then(res=>{
              if(res.code==200){
                  Toast.success(res.msg)
                  //把数据存储到本地存储中
                  sessionStorage.setItem('userInfo',JSON.stringify(res.list))
                  //成功之后跳转到个人中心
                  this.$router.push('/mine')
              }else{
                    Toast.fail(res.msg)
              }
          })
    },
    register(){
      this.$router.push({
        path:'/register',
        parse:{
          
        }
      })

    }
  }
};
</script>

<style lang="" scoped>
@import "../../assets/css/login.css";
</style>