<template>
  <div>
    <video v-show='playing' :id='id' :src="src" objectFit='cover'
      :controls='false' loop></video>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      id: Math.random().toString(36).slice(2),
      playing: false
    }
  },
  created () {
    this._video = wx.createVideoContext(this.id)
  },
  methods: {
    /**
     * 开始播放，供外部调用
     */
    start () {
      this._video.play()
      this.playing = true
    },
    /**
     * 暂停播放，供外部调用
     */
    pause () {
      this._video.pause()
    },
    /**
     * 停止播放，供外部调用
     */
    stop () {
      this._video.stop()
      this.playing = false
    }
  }
}
</script>

<style lang="less" scoped>
video {
  height: 100vh;
  width: 100vw;
}
</style>
