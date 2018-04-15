<template>
  <div class="editor">
    <img :src="src" mode='widthFix'/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      src: '',
      i: 0
    }
  },
  mounted () {
    let {i, src} = this.$mp.query
    this.src = src
    this.i = i
  },
  unmouted () {
    this.src = ''
    this.i = 0
  }
}
</script>

<style lang="less" scoped>
.editor {
  position: relative;
  background: #000;
  width: 100vw;
  height: 100vh;
}
img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
