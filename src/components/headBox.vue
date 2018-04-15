<template>
  <div class="headbox" :style="_boxStyle">
    <div>
      <img :style="_imgStyle"
        v-for="(head, index) in _heads"
        :key="index" :src="head">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 240
    },
    heads: {
      type: Array,
      require: true
    }
  },
  computed: {
    _heads () {
      this.heads.length = Math.min(this.heads.length, 4)
      return this.heads
    },
    _boxStyle () {
      return `width:${this.size}rpx;height:${this.size}rpx;`
    },
    _imgStyle () {
      return this.heads.length < 2
        ? this._boxStyle
        : `width:${this.size / 2 - 6}rpx;height:${this.size / 2 - 6}rpx;padding:3rpx;`
    }
  }
}
</script>

<style lang="less" scoped>
.headbox {
  background: gray;
  position: relative;

  > div {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    width: 100%;
    height: 100%;

    > img {
      float: left;
    }
  }
}
</style>
