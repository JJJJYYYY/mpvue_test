<template>
  <div class="nocard" :style='_height'>
    <h2>为主子创建一张专属萌卡</h2>
    <p>做个有身份的宠儿</p>
    <a href="../create/main" class="button">立即创建</a>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 0
    }
  },
  computed: {
    _height () {
      console.log(this.height)
      return 'height:' + (this.height ? `${this.height}px` : 'auto') + ';'
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../global.less);

.nocard {
  position: relative;
  padding: 10px;
  border: 1px solid @gray;
  border-radius: 10px;

  > h2 {
    font-size: @font-lg;
  }

  > p {
    font-size: @font;
    color: @gray;
  }
}
.button {
  position: absolute;
  right: 10px;
  bottom: 10px;
}
</style>
