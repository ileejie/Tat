<template>
  <div class="toast" @clcik="closeToast">
    错误提示
  </div>
</template>

<script>
export default {
  name: 'toast',
  props: {
    title: String,
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close () {
      this.$emit('update: visible', false);
    },
    closeToast (e) {
      // if (this.visible) {
      //   document.querySelector('.toast').contains(e.target) ? '' : this.close();
      // }
    }
  }
};
</script>

<style lang="sass">
.toast
  position: fixed
  width: 200px
  height: 50px
  top: 30%
  left: 50%
  font-size: 30px
  line-height: 50px
  color: #fff
  margin-left: -100px
  background: rgba(0,0,0,0.3)
  z-index: 999
</style>
