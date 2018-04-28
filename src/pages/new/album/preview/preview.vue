<template>
  <div class="preview">
    <meng :content="get_content" :interal='interval' hideIcon />
  </div>
</template>

<script>
import meng from '@/components/meng'
import { mapState } from 'vuex'

export default {
  components: { meng },
  mounted () {
    this.$children[0].start()
    console.log(this)
  },
  computed: {
    ...mapState({
      intro: state => state.albumState.intro,
      pics: state => state.albumState.pics,
      interval: state => state.albumState.interval * 1000,
      bgMusic: state => state.albumState.bgMusic,
      texts: state => state.albumState.texts
    }),
    get_content () {
      return { // 提交没触发更新
        sound: this.bgMusic,
        intro: this.intro,
        content: this.pics.map((pic, i) => {
          return {
            img: pic,
            sound: '',
            text: this.texts[i] || []
          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.preview {
  background: #000;
  height: 100vh;
}
</style>
<style lang="less">
._meng {
  bottom: 0!important;
}
</style>

