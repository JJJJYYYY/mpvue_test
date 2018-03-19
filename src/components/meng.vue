<template>
  <div class="meng">
    <span class="tag absolute">
      {{ current }} / {{content.content.length}}
    </span>
    <swiper class="swiper" autoplay :duration='2'
      @change="swiperChange">
      <swiper-item v-for="(item, index) in content.content" :key="index">
        <img class="_image" :src='item.img' mode='aspectFit'/>
      </swiper-item>
    </swiper>
    <div class="menu absolute">
      <div @click="stop"><icon type="success" size="30" /></div>
      <div><icon type="waiting" size="30" /></div>
      <div><icon type="download" size="30" /></div>
      <div><icon type="search" size="30" /></div>
      <div><icon type="clear" size="30" /></div>
    </div>
    <div class="info absolute">
      <div class="_title">@{{'提莫'}}</div>
      <div>这是五个字这是五个字这是五个字这是五个字这是五个字这是五个字这是五个字这是五个字</div>
    </div>
    <progress class="absolute" :percent='50'
      color="pink" stroke-width="2"/>
  </div>
</template>

<script>
export default {
  props: {
    content: Object
  },
  data () {
    return {
      current: 1
    }
  },
  created () {
    let data = this.content

    let audio = (this._audio = wx.createInnerAudioContext())
    audio.onPlay(this._play.bind(this))
    audio.onPause(this._pause.bind(this))
    audio.onEnded(this._ended.bind(this))
    audio.onTimeUpdate(this._timeUpdate.bind(this))

    this._sound = data.sound
      ? data.sound
      : data.content.map(item => item.sound)
    this._hasGlobal = !!data.sound

    audio.src = this._sound
  },
  methods: {
    swiperChange ({ target }) {
      this.current = target.current + 1
    },
    /**
     * 开始播放，供外部调用
     */
    start () {
      // this._audio.play()
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

.meng, .swiper, ._image {
  width: 100%;
  height: 100%;
}
.meng {
  position: relative;
}

.swiper, swiper-item, ._image {
  z-index: -1;
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
