<template>
  <div class="meng">
    <div class="_meng">
      <span class="tag absolute">
        {{ current + 1 }} / {{content.content.length}}
      </span>
      <swiper class="swiper" :autoplay="playing"
        :current="current" :interval="interval" @change="swiperChange">
        <swiper-item v-for="(item, index) in content.content" :key="index">
          <div>
            <img class="_image" :src='item.img' mode='widthFix'/>
            <span class="__text"
              v-for="(t, i) in item.text" :key='i'
              :style="{
                left: t.x + '%',
                top: t.y + '%',
                color: t.color
              }"
              >
              {{t.text}}
            </span>
          </div>
        </swiper-item>
      </swiper>
      <div class="menu absolute" v-if="!hideIcon">
        <div class="_head">
          <img class="__head" :src="content.head" />
          <img
            data-icon class="icon_attention"
            src="/assets/icon/attention.png"
            model='widthFix'
          />
        </div>
        <div>
          <img v-if="content.like" data-icon
            class="icon_like like_click"
            src="/assets/icon/like.png"
            model='widthFix'
          />
          <img v-else data-icon
            class="icon_like like_click"
            src="/assets/icon/like.png"
            model='widthFix'
          />
          <p class="__number">{{10.4}}w</p>
        </div>
        <div>
          <img
            data-icon class="icon_comment"
            src="/assets/icon/comment.png"
            model='widthFix'
          />
          <p class="__number">{{10.4}}w</p>
        </div>
        <div>
          <img
            data-icon class="icon_share"
            src="/assets/icon/share.png"
            model='widthFix'
          />
          <p class="__number">{{10.4}}w</p>
        </div>
        <div>
          <img
            data-icon class="icon_jar"
            src="/assets/icon/jar.png"
            model='widthFix'
          />
        </div>
      </div>
      <div class="info absolute">
        <span class="_topic">#{{'阳光暖男'}}</span>
        <div class="_title">@{{'提莫'}}</div>
        <p class="_intro">{{content.intro}}</p>
      </div>
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
      // this._audio.play()
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

.menu {
  position: relative;
}
.meng {
  height: 100%;
}
._meng {
  position: absolute;
  width: 100vw;
  top: 0;
  bottom: @btm-height;
}
.swiper, swiper-item, ._image {
  width: 100%;
  height: 100%;
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
  right: 12px;
  font-size: @font;
  padding: @dis;
  border-radius: 5px;
  .trans-black(0.3);
  z-index: 1;
}

.info {
  left: 12px;
  bottom: 38.5px;
  width: 250px;
  text-align: left;
  font-size: @font;

  ._title {
    font-size: @font;
    padding-top: 10px;
  }

  ._intro {
    max-width: 70vw;
    white-space: wrap;
  }
}

@size: 60px;
@margin-top: 20px;
.menu {
  display: flex;
  flex-direction: column;
  right: 0;
  bottom: 0;
  width: @size;
  height: @size * 6 + @margin-top;

  > div {
    width: 50px;
    text-align: center;
    margin-bottom: 20px;

    &:last-child {
      margin-top: @margin-top / 2;
    }
  }
}
._topic {
  padding: 4px 5px;
  font-size: 11px;
  color: @white;
  background: @primary;
  border-radius: 2.5px;
}
.absolute {
  position: absolute;
  color: @white;
  z-index: 1;
}
._head {
  position: relative;
}
.__head {
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  border-radius: 50%;
  border: 1px solid #f6f6f6;
}
img[data-icon] {
  width: 36.5px;
  height: 32px;
}
.icon_attention {
  width: 23px!important;
  height: 23px!important;
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%, -18px);
}
.__number {
  font-size: @font-sm;
}

swiper-item {
  >div {
    position: relative;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
  }
}

.__text {
  position: absolute;
  font-size: 25px;
  padding: 10px;
  white-space: nowrap;

  img {
    position: absolute;
    width: 18px;
    height: 18px;
    top: -9px;
    right: -9px;
  }
}
</style>
