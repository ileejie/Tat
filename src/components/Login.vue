<template>
  <div class="login">
    <img class="user-img" src="../assets/icon/开心.png" alt="">
    <el-input class="user" placeholder="请输入手机号/用户名" clearable v-model="phone"></el-input>
    <el-input class="pass" placeholder="请输入密码" type="password" v-model="pass"></el-input>
    <el-button class="login-btn" type="primary" @click="submitLogin">登录</el-button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      phone: '',
      pass: '',
      visible: false
    };
  },
  methods: {
    submitLogin: function () {
      let that = this;
      if (this.phone !== '15588868422') {
        this.visible = !this.visible;
        setTimeout(function () {
          that.visible = !that.visible;
        }, 2000);
      } else if (this.pass !== 'wain9425') {
        this.visible = !this.visible;
        setTimeout(function () {
          that.visible = !that.visible;
        }, 2000);
      } else {
        this.$router.push({name: 'index'});
      }
    }
  }
};
</script>

<style lang="sass">
  .login
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
  .user-img
    display: block
    width: 90px
    height: 90px
    border: 2px solid #409EFF
    margin: 50px 0
    border-radius: 50%
  .user, .pass
    display: block
    width: 300px
    height: 40px
    margin: 50px 0
    background: rgba(255,255,255, 0.7)
  .login-btn
    display: block
    width: 150px
    margin: 0
</style>
