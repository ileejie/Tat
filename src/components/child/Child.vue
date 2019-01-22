<template>
  <div class="child" @click="changeStr">
    {{abc}} 我是子页面 {{str}}
  </div>
</template>

<script>
export default {
  name: 'child',
  data () {
    return {
      abc: 'hello'
    };
  },
  props: ['str'],
  methods: {
    changeStr () {
      this.$emit('chg', this.abc);
    }
  }
};
</script>

<style scoped>

</style>
