<template>
  <div class="preview">
    <meng :content="getContent" :interal='interval' hideIcon />
  </div>
</template>

<script>
import meng from '@/components/meng'
import { mapState } from 'vuex'

export default {
  components: { meng },
  mounted () {
    this.$children[0].start()
  },
  computed: {
    ...mapState({
      intro: state => state.albumState.intro,
      pics: state => state.albumState.pics,
      interval: state => state.albumState.interval * 1000,
      bgMusic: state => state.albumState.bgMusic
    }),
    getContent () {
      return {
        sound: this.bgMusic,
        intro: this.intro,
        content: this.pics.map(pic => {
          return {
            img: pic,
            sound: ''
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
}
</style>
