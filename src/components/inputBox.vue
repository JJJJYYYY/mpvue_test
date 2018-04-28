<template>
  <alert>
    <input :focus='focus' v-model.lazy="text" />
  </alert>
</template>

<script>
import alert from './base/alert'

export default {
  components: { alert },
  data () {
    return {
      text: '',
      focus: false
    }
  },
  methods: {
    show (text = '') {
      this.text = text
      this.focus = true
      return this.$children[0].alert().then(() => this.text)
    },
    loseFocus () {
      this.focus = false
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
