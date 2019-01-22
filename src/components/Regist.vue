<template>
  <div class="register">
    <el-input class="user" placeholder="请输入手机号" clearable></el-input>
    <el-input class="pass" placeholder="请输入密码" type="password"></el-input>
    <div class="code-box">
      <el-input class="code-ipt" placeholder="请输入验证码"></el-input>
      <el-button class="button-code" type="primary">发送验证码</el-button>
    </div>
    <el-button type="primary" class="register-btn">注册</el-button>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      msg: ''
    };
  }
};
</script>

<style lang="sass">
  .register
    background: url("../assets/background.jpg") 0 0 no-repeat
    background-size: 100% 100%
    width: 100%
    height: 100%
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
  .user-img
    display: block
    width: 50px
    height: 50px
    border: 2px solid #fff
    margin: 100px 0
  .user, .pass
    display: block
    width: 300px
    height: 40px
    background: rgba(255,255,255, 0.7)
    margin: 50px 0
  .code-box
    display: flex
    flex-direction: row
    justify-content: space-between
    align-items: center
    width: 300px
    height: 40px
    margin: 0
  .code-ipt
    width: 150px
    height: 100%
  .register-btn
    display: block
    width: 250px
    height: 40px
    margin: 80px 0 0
</style>
