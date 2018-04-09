<template>
  <div class="alert" v-show="visible">
    <div class="_body">
      <i v-if="showClose" @click="cancle">X</i>
      <Icon type='success' color='pink' />
      <p>{{ text }}</p>
      <a class="button" v-if="showConfirmButton"
        @click="confirm"
        >{{ confirmButtonText }}</a>
    </div>
  </div>
</template>

<script>
import Promise from 'jjj-promise'

function noop () {}

export default {
  data () {
    return {
      text: '',
      showClose: true,
      confirmButtonText: '确定',
      showConfirmButton: true,
      visible: false,
      confirmCallback: noop,
      cancleCallback: noop
    }
  },
  methods: {
    alert (text, config) {
      return new Promise((resolve, reject) => {
        this.visible = true
        this.text = text

        Object.assign(this, config)

        this.confirmCallback = resolve
        this.cancleCallback = reject
      })
    },
    confirm () {
      this.confirmCallback()
      this.visible = false
      this.confirmCallback = noop
    },
    cancle () {
      this.cancleCallback()
      this.visible = false
      this.cancleCallback = noop
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../../global.less);

.alert {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  .trans-black(0.6);
}

._body {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  transform: translate(-50%, -50%);
  background-color: @white;
  padding: 10px 20px;
  text-align: center;
  border-radius: 8px;

  > i {
    text-align: right;
  }

  .button {
    margin-top: 10px;
  }
}
</style>
