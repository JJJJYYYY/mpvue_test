<template>
  <div>
    <div class="album">
      <div class="_intro">
        <textarea class="__textarea" placeholder="你的想法" maxlength="50"
          @input="inputIntro">
        </textarea>
        <span class="__fontNum">{{ intro.length }}/50</span>
      </div>
      <p>语音<span class="__voice">{{recordTime}}''</span>删除</p>
      <ul class="_album">
        <li class="__album" v-for="(pic, i) in pics" :key="i">
          <a class="___del" @click="delThisPic(i)">X</a>
          <img :src="pic" @click="toEdit(i, pic)" >
        </li>
        <li class="__add" v-if="pics.length < 9" @click="choosePic">+</li>
      </ul>
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
      <a class="button btn-border"
        @touchstart="startRecord"
        @touchend='stopRecord'
        @touchcancel='stopRecord'
        >
        {{recording ? '别说话吻我' : '按住说话'}}
        </a>
      <a class="button btn-primary">发布</a>
    </div>
  </div>
</template>

<script>
import Hat from '@/utils/wx'
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      recording: false,
      startTime: 0,
      recordTime: 0
    }
  },
  created () {
    const recorderManager = wx.getRecorderManager()
    this.mutationRecorder(recorderManager)

    recorderManager.onStart(this.onStart)
    recorderManager.onStop(this.onStop)
    recorderManager.onError(this.onError)
  },
  methods: {
    ...mapMutations([
      'mutationIntro', 'mutationPics', 'mutationDelPic',
      'mutationBgMusic', 'mutationInterval', 'mutationRecorder'
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
    },
    onStop ({ tempFilePath }) {
      this.recordTime = ~~((Date.now() - this.startTime) / 1000)
      this.startTime = 0

      this.recording = false
      this.mutationBgMusic(tempFilePath)
    },
    onError (e) {
      this.startTime = 0
      this.recordTime = 0
      console.error(e)
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
      bgMusic: state => state.albumState.bgMusic,
      recorderManager: state => state.albumState.recorderManager
    })
  }
}
</script>

<style lang="less" scoped>
@import url(../../../global.less);

.album {
  width: 90%;
  margin: 0 auto;
}
._intro {
  position: relative;
}
.__textarea {
  width: 100%;
  height: 100px;
  border: 1px solid @gray;
  border-radius: 8px;
}
.__fontNum {
  position: absolute;
  bottom: 0;
  right: 0;
}

@padding: 6px;
.__voice {
  padding-left: @padding;
  padding-right: @padding * 3;
  background: @primary;
  border-radius: 6px;
  color: @white;
  position: relative;

  @border: 6px;
  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    border: @border solid transparent;
    border-right-color: @primary;
    left: -(@padding + @border - 2px);
    top: 50%;
    margin-top: -@border;
  }
}

._album {
  display: flex;
  flex-wrap: wrap;
  height: 91vw;

  > li {
    width: 28vw;
    height: 28vw;
    padding: 1vw;
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
.___del {
  position: absolute;
  width: 5vw;
  height: 5vw;
  right: 1vw;
  top: 0;
}
.__add {
  box-sizing: border-box;
  font-size: 20vw;
  line-height: 28vw;
  text-align: center;
  border: 1px dashed @gray;
  margin: 1vw;
}
._interval {
  font-size: @font;

  .radio {
    min-width: 50px;
  }
}
._operation {
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 54px;
  border-top: 1px solid @gray;
  display: flex;
  justify-content: center;
  align-items: center;

  .button {
    height: 36px;
    line-height: 36px;
    margin-right: 10px;

    &:nth-child(1) {
      margin-left: 5vw;
    }

    &:nth-child(2) {
      flex: 1;
    }

    &:nth-child(3) {
      margin-right: 5vw;
    }
  }
}
</style>
