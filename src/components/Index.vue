<template>
  <div class="index">
    <div class="header-top">
      <router-link class="router-a" to="/login">
        <el-button class="log-btn" round>登录</el-button>
      </router-link>
      <router-link class="router-a" to="/register">
        <el-button class="log-btn" round type="primary">注册</el-button>
      </router-link>
    </div>
    <ul class="nav-list">
      <li>首页</li>
      <li>新闻</li>
      <li>博客</li>
      <li>关于</li>
    </ul>
    <h3>首页-活动报名</h3>
    <el-steps :active="active" align-center class="steps">
      <el-step title="步骤1" description="姓名"></el-step>
      <el-step title="步骤2" description="联系方式"></el-step>
      <el-step title="步骤3" description="年龄"></el-step>
      <el-step title="步骤4" description="家庭地址"></el-step>
    </el-steps>
    <div class="step-box">
      <div class="step-one" v-show="active === 0">
        <el-input v-model="userInfo[0].value" placeholder="请输入姓名"></el-input>
      </div>
      <div class="step-two" v-show="active === 1">
        <el-input v-model="userInfo[1].value" placeholder="请输入联系方式"></el-input>
      </div>
      <div class="step-three" v-show="active === 2">
        <el-input v-model="userInfo[2].value" placeholder="请输入年龄"></el-input>
      </div>
      <div class="step-four" v-show="active === 3">
        <el-input v-model="userInfo[3].value" placeholder="请输入家庭地址"></el-input>
      </div>
      <div class="step-five" v-show="active === 4">填写信息完成</div>
    </div>
    <el-button class="next-btn" type="primary" @click="nextStep">下一步</el-button>
    <child :str="translate" @chg="changeStr"></child>
  </div>
</template>

<script>
import Child from './child/Child.vue';
export default {
  name: 'index',
  data () {
    return {
      active: 0,
      userInfo: [
        {
          value: ''
        },
        {
          value: ''
        },
        {
          value: ''
        },
        {
          value: ''
        }
      ],
      translate: '我是传过去的值'
    };
  },
  methods: {
    nextStep () {
      if (this.active <= 3 && this.userInfo[this.active].value === '') {
        console.log('不能为空！');
        this.abc = '我是谁';
      } else {
        this.active++;
      }
      if (this.active > 4) {
        this.$router.push({name: 'success'});
      }
    },
    changeStr (translate) {
      console.log(translate);
    }
  },
  components: {
    child: Child
  }
};
</script>

<style lang="sass">
  .index
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
  .header-top
    width: 100%
    height: 50px
    padding: 0 50px 0 0
    box-sizing: border-box
    display: flex
    flex-direction: row
    justify-content: flex-end
    align-items: center
    background: #ffffff
    box-shadow: 0 2px 3px rgba(0,0,0, 0.05)
    .router-a
      margin: 0 15px
      .log-btn
        display: inline-block
        height: 35px
        width: 80px
        padding: 0
        line-height: 35px
  .nav-list
    display: flex
    flex-direction: row
    justify-content: flex-start
    align-items: center
    padding: 0
    margin-top: 20px
    li
      list-style: none
      width: 60px
      height: 30px
      font-size: 16px
      line-height: 30px
      text-align: center
      color: #000
      margin: 0 5px
    li:hover
      background: #3a8ee6
      color: #fff
      cursor: pointer
  .steps
    width: 100%
  .step-box
    margin: 30px 0 0
  .next-btn
    margin: 30px auto 0
</style>
