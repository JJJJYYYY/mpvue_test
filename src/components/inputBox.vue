<template>
  <alert>
    <input :focus='true' v-model.lazy="text" />
  </alert>
</template>

<script>
import alert from './base/alert'

export default {
  components: { alert },
  data () {
    return {
      text: ''
    }
  },
  methods: {
    show (text = '') {
      this.text = text
      return this.$children[0].alert().then(() => this.text)
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../global.less);

input {
  border: 0.5px solid @primary;
  margin: 6px;
}
</style>
