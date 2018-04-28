<template>
  <div>
    <div class="album">
      <div class="_intro">
        <textarea
          class="__textarea"
          placeholder="这一刻的想法...50字以内"
          maxlength="50"
          @input="inputIntro">
        </textarea>
        <span class="__fontNum">{{ intro.length }}/50</span>
      </div>
      <ul class="_label">
        <li
          v-for="(label, index) in labelData" :key="index">
          # {{ label.name }}
        </li>
        <li><span class="__label_add">+</span></li>
      </ul>
      <p class="_voice">
        <span>语音：</span>
        <span class="__voice">
          <img src="/assets/icon/audio_default.png"/>
          {{recordTime}}''
        </span>
        <span>删除</span>
      </p>
      <div class="_album_wrap">
        <ul class="_album">
          <li class="__album" v-for="(pic, i) in pics" :key="i">
            <a class="___del" @click="delThisPic(i)">X</a>
            <img :src="pic" @click="toEdit(i, pic)" >
          </li>
          <li class="__add" v-if="pics.length < 9" @click="choosePic">+</li>
        </ul>
      </div>
      <div class="_interval">
        选择图片轮播时间：
        <span @click="chooseInterval">
          <span class="radio" data-interval='1'
            :class="{checked: interval === 1}"
            >1秒</span>
          <span class="radio" data-interval='2'
            :class="{checked: interval === 2}"
            >2秒</span>
          <span class="radio" data-interval='3'
            :class="{checked: interval === 3}"
            >3秒</span>
        </span>
      </div>
    </div>
    <div class="_operation">
      <a class="button btn-border disable" href="./preview/main">预览</a>
      <a
        @touchstart="startRecord"
        @touchend='stopRecord'
        @touchcancel='stopRecord'
        >
        {{recording ? '别说话吻我' : '按住说话'}}
        </a>
      <a>发布</a>
    </div>
  </div>
</template>

<script>
import Hat from '@/utils/wx'
import Recorder from '@/utils/recorder'
import { mapState, mapMutations } from 'vuex'

import labelData from '@/data/label'

let timer = null

export default {
  data () {
    return {
      recording: false,
      startTime: 0,
      recordTime: 0,
      labels: [],
      labelData,
      recorderManager: null
    }
  },
  created () {
    this.recorderManager = Recorder()

    Recorder.$on('start', this.onStart)
    Recorder.$on('stop', this.onStop)
    Recorder.$on('error', this.onError)
  },
  methods: {
    ...mapMutations([
      'mutationIntro', 'mutationPics',
      'mutationDelPic', 'mutationBgMusic', 'mutationInterval'
    ]),
    async choosePic () {
      let { tempFilePaths } = await Hat.chooseImage({ count: 9 - this.pics.length })
      this.mutationPics(tempFilePaths)
    },
    startRecord () {
      this.recorderManager.start({
        interval: 15000,
        format: 'mp3'
      })
    },
    stopRecord () {
      this.recorderManager.stop()
    },
    onStart () {
      this.startTime = Date.now()
      this.recording = true
      this.recordTime = 0
      timer = setInterval(() => {
        this.recordTime++
      }, 1000)
    },
    onStop ({ tempFilePath }) {
      this.recordTime = ~~((Date.now() - this.startTime) / 1000)
      this.startTime = 0

      this.recording = false
      this.mutationBgMusic(tempFilePath)
      this.clearTimer()
    },
    onError (e) {
      this.startTime = 0
      this.recordTime = 0
      this.clearTimer()
      console.error(e)
    },
    clearTimer () {
      if (timer) {
        clearInterval(timer)
        timer = null
      }
    },
    toEdit (i, src) {
      wx.navigateTo({ url: `./editor/main?i=${i}&src=${src}` })
    },
    inputIntro ({ target }) {
      this.mutationIntro(target.value)
    },
    delThisPic (i) {
      this.mutationDelPic(i)
    },
    chooseInterval ({ target }) {
      this.mutationInterval(target.dataset.interval)
    }
  },
  computed: {
    ...mapState({
      intro: state => state.albumState.intro,
      pics: state => state.albumState.pics,
      interval: state => state.albumState.interval,
      bgMusic: state => state.albumState.bgMusic
    })
  }
}
</script>

<style lang="less" scoped>
@import url(../../../global.less);

.album {
  width: 94%;
  margin: 0 auto;
}
._intro {
  position: relative;
  margin-top: 10px;
}
@light-gray: #bbbbbb;
.__textarea {
  width: 100%;
  height: 75px;
  font-size: @font;
  color: @light-gray;
  border: 1px solid @gray;
  border-radius: 5px;
  padding: 15px;
  box-sizing: border-box;
}
.__fontNum {
  position: absolute;
  bottom: 5px;
  right: 5px;
  color: @light-gray;
  font-size: 12px;
}

@box-padding: 1vw;
._album {
  display: flex;
  flex-wrap: wrap;

  > li {
    width: 110px;
    height: 110px;
    padding: @box-padding;
  }
}
.__album {
  position: relative;

  img {
    background: red;
    width: 100%;
    height: 100%;
  }
}
._album_wrap {
  height: 95vw;
  margin-top: 20px;
}
.___del {
  @size: 25px;
  position: absolute;
  width: @size;
  height: @size;
  right: @box-padding;
  top: @box-padding;
  text-align: center;
  color: @white;
  background: rgba(0, 0, 0, 0.3);
}
.__add {
  box-sizing: border-box;
  font-size: 64px;
  line-height: 95px;
  text-align: center;
  border: 1px dashed @gray;
  color: @gray;
  margin: 1vw;
}
._interval {
  font-size: @font;

  .radio {
    min-width: 50px;
  }
}
@height: 49px;
._operation {
  position: fixed;
  width: 100%;
  bottom: 0;
  height: @height;
  display: flex;
  justify-content: center;
  align-items: center;

  >a {
    text-align: center;
    font-size: @font;
    height: @height;
    line-height: @height;

    &:first-child {
      flex: 1;
      color: @primary;
      border-top: 0.5px solid @gray-light;
    }
    &:last-child {
      width: 125px;
      color: @white;
      background-color: @primary;
    }
  }

  // .button {
  //   height: 36px;
  //   line-height: 36px;
  //   margin-right: 10px;

  //   &:nth-child(1) {
  //     margin-left: 5vw;
  //   }

  //   &:nth-child(2) {
  //     flex: 1;
  //   }

  //   &:nth-child(3) {
  //     margin-right: 5vw;
  //   }
  // }
}
@gray: #aaaaaa;
@font-base: 11px;
._label {
  display: flex;
  margin-top: 5px;

  >li {
    font-size: @font-base;
    line-height: 20px;
    padding: 0 4px;
    margin-right: 6px;
    border: 0.5px solid @gray;
    border-radius: 4px;
    color: @gray;

    &:active {
      background: @primary;
      border-color: @primary;
    }
  }
}
.__label_add {
  font-size: @font-base + 6px;
  padding: 0 6px;
}
._voice {
  font-size: 15px;
  color: @light-gray;
  margin-top: 5px;
}
</style>
