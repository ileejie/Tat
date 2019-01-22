<template>
  <div class="hello">
    <img class="logo" src="../assets/welcome.png">
    <h1>{{ msg }}</h1>
    <el-button class="start-btn" type="primary" round @click="startTY" v-if="status">开始吧！</el-button>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {
      msg: 'Welcome to The Couple App',
      firstCome: window.localStorage.getItem('status'),
      status: true
    };
  },
  methods: {
    startTY () {
      this.$router.push({name: 'index'});
    }
  },
  created () {
    const that = this;
    if (this.firstCome) {
      this.status = false;
      setTimeout(function () {
        that.$router.replace({name: 'index'});
      }, 2000);
    } else {
      this.status = true;
      this.firstCome = window.localStorage.setItem('status', 'yes');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
  .hello
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    width: 100%
    height: 100%
  .logo
    display: block
    width: 218px
    height: 200px
    margin: 100px 0
  h1
    font-weight: normal
    font-size: 24px
    text-align: center
  .start-btn
    width: 150px
    margin: 50px 0 0
</style>
