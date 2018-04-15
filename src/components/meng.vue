<template>
  <div class="meng">
    <span class="tag absolute">
      {{ current + 1 }} / {{content.content.length}}
    </span>
    <swiper class="swiper" :autoplay="playing"
      :current="current" :interval="interval" @change="swiperChange">
      <swiper-item v-for="(item, index) in content.content" :key="index">
        <img class="_image" :src='item.img' mode='widthFix'/>
      </swiper-item>
    </swiper>
    <div class="menu absolute" v-if="!hideIcon">
      <div @click="stop"><icon type="success" size="30" /></div>
      <div><icon type="waiting" size="30" /></div>
      <div><icon type="download" size="30"
        @click="showComment(3)" /></div>
      <div><icon type="search" size="30" /></div>
      <div><icon type="clear" size="30" /></div>
    </div>
    <div class="info absolute">
      <div class="_title">@{{'提莫'}}</div>
      <p class="_intro">{{content.intro}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: Object,
    hideIcon: Boolean,
    interval: {
      type: Number,
      default: 2000
    }
  },
  data () {
    return {
      current: 1,
      playing: false
    }
  },
  created () {
    let data = this.content

    let audio = this._audio = wx.createInnerAudioContext()
    audio.onPlay(this._play)
    audio.onPause(this._pause)
    audio.onEnded(this._ended)
    audio.onTimeUpdate(this._timeUpdate)

    this._sound = data.sound
      ? data.sound
      : data.content.map(item => item.sound)
    this._hasGlobal = !!data.sound

    audio.src = this._sound
  },
  methods: {
    swiperChange ({ target }) {
      this.current = target.current
    },
    showComment (id) {
      this.$emit('show-comment', id)
    },
    /**
     * 开始播放，供外部调用
     */
    start () {
      this._audio.play()
      this.current = 0
      this.playing = true
    },
    /**
     * 暂停播放，供外部调用
     */
    pause () {
      this._audio.pause()
    },
    /**
     * 停止播放，供外部调用
     */
    stop () {
      this._audio.pause()
      this.current = 1
      this.playing = false
    },

    _play () {
      console.log('play')
    },
    _pause () {},
    _ended () {
      console.log('end')
    },
    _timeUpdate () {
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../global.less);

.meng, .swiper, swiper-item, ._image {
  width: 100vw;
  height: 100vh;
}
.swiper, ._image {
  z-index: 0;
}

._image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@dis: 10px;
.tag {
  top: 20px;
  right: 0;
  font-size: @font;
  padding: @dis;
  z-index: 1;
}

.info {
  left: @dis;
  bottom: @btm-height + 30px;
  width: 250px;
  text-align: left;
  font-size: @font;

  ._title {
    font-size: @font-lg;
  }

  ._intro {
    max-width: 40vw;
    white-space: wrap;
  }
}

@size: 60px;
@margin-top: 20px;
.menu {
  display: flex;
  flex-direction: column;
  right: 0;
  bottom: @btm-height;
  width: @size;
  height: @size * 6 + @margin-top;

  > div {
    height: @size;
    text-align: center;

    &:last-child {
      margin-top: @margin-top;
    }
  }
}

progress {
  bottom: @btm-height;
  width: 100%;
}

.absolute {
  position: absolute;
  color: @white;
  z-index: 1;
}
</style>
