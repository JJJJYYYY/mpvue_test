<template>
  <div class="editor">
    <div class="_img_wrap">
      <div>
        <img class="_editor_img" :src="src" mode='widthFix'/>
        <span class="__text"
          v-for="(t, i) in text" :key='i'
          @touchmove='moveText($event, t)'
          @touchend='stopText($event, t)'
          @touchcancel='stopText($event, t)'
          @click="editText(t)"
          :style="{
            left: t.x + 'px',
            top: t.y + 'px',
            color: t.color
          }"
          >
          {{t.text}}
        </span>
      </div>
    </div>
    <div class="_tool">
      <p class="_voice">
        <span>语音：</span>
        <span class="__voice">
          <img src="/assets/icon/audio_default.png"/>
          {{recordTime}}''
        </span>
        <span>删除</span>
      </p>
      <ul class="_color">
        <li class="_color_item"
          v-for="(color, index) in colorList" :key="index"
          :class="{ active: index === currColor }"
          :style="{ background: color.value }"
          @click="chooseColor(index)"
          >
        </li>
      </ul>
      <div class="_menu">
        <ul class="__tool">
          <li>
            <img src="/assets/icon/pen.png" />
          </li>
          <li @click='addText'>
            <img src="/assets/icon/text.png" />
          </li>
          <li>
            <img src="/assets/icon/audio_default.png" />
          </li>
        </ul>
        <a class="__cancel">取消</a>
        <a class="__save">保存</a>
      </div>
      <inputBox></inputBox>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import { getRefByTags } from '@/utils/utils'

import inputBox from '@/components/inputBox'
// import { getSystemInfo } from '@/utils/utils'

const colorList = [
  {
    value: '#ffffff'
  },
  {
    value: '#2b2b2b'
  },
  {
    value: '#fd1d16'
  },
  {
    value: '#f9f625'
  },
  {
    value: '#29df1c'
  },
  {
    value: '#2599ff'
  },
  {
    value: '#8a07ff'
  }
]

let lastTouch = null

export default {
  components: { inputBox },
  data () {
    return {
      src: '',
      i: 0,
      currColor: 0,
      recordTime: 0,
      colorList,
      text: [],
      currT: null
    }
  },
  mounted () {
    let {i, src} = this.$mp.query
    this.src = src || 'http://photocdn.sohu.com/20141225/Img407278781.jpg'
    this.i = i || 0

    // 初始化文本
    this.text = this.texts[this.i] || []
    lastTouch = null
    Object.assign(this.$refs, getRefByTags(this, 'inputBox'))
  },
  unmouted () {
    this.src = ''
    this.i = 0
  },
  methods: {
    ...mapMutations([
      'mutationText'
    ]),
    chooseColor (index) {
      this.currColor = index
      this.currT.color = colorList[this.currColor].value
    },
    async addText () {
      let text = await this.$refs.inputBox.show()
      this.currT = {
        x: 0,
        y: 0,
        color: colorList[this.currColor].value,
        text: text
      }
      this.text.push(this.currT)
    },
    moveText (e, t) {
      if (lastTouch) {
        let x = t.x + e.clientX - lastTouch.clientX
        let y = t.y + e.clientY - lastTouch.clientY
        if (x >= 0 && y >= 0) {
          t.x = x
          t.y = y
        }
      }
      lastTouch = e
    },
    stopText () {
      lastTouch = null
    }, // todo: 样式调整，commit store
    async editText (t) {
      this.currT = t
      this.currColor = colorList.findIndex(color => color.value === t.color)

      t.text = await this.$refs.inputBox.show(t.text)
    },
    getImageInfo () {
      wx.createSelectorQuery().select('._editor_img').fields({
        size: true
      }, res => {
        res.width
        res.height
      }).exec()
    }
  },
  computed: {
    ...mapState({
      texts: state => state.albumState.texts
    })
  }
}
</script>

<style lang="less" scoped>
@import url(../../../../global.less);

.editor {
  position: relative;
  background: #000;
  width: 100vw;
  height: 100vh;
}
._img_wrap {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: @btm-height;
  >div {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
  }

  img {
    width: 100%;
  }
}
._tool {
  position: absolute;
  bottom: 0;
  width: 100%;
}
@light-gray: #bbbbbb;
._voice {
  font-size: 15px;
  color: @light-gray;
  margin-top: 5px;
  margin-left: 12px;
}
._color {
  display: flex;
  margin-left: 13px;
  margin-top: 15px;
}
._color_item {
  width: 14px;
  height: 14px;
  margin: 0 7.5px;
  border-radius: 50%;
  border: 1.5px solid @white;

  &.active {
    width: 16px;
    height: 16px;
    margin: 0 3px;
    margin-top: -1px;
    border-width: 2px;
  }
}
._menu {
  display: flex;
  justify-content: center;
  align-content: center;
  color: @white;
  width: 100%;
  height: 49px;
  line-height: 49px;
  margin-top: 25px;
  text-align: center;
}
.__tool {
  display: flex;
  justify-content: center;
  align-content: center;
  flex: 1;

  >li {
    flex: 1;
  }

  img {
    width: 15px;
    height: 15px;
  }
}
.__cancel, .__save {
  width: 94px;
  color: #e6e1e2;
  font-size: @font;
}
.__text {
  position: absolute;
  font-size: 25px;
  padding: 10px;
  border: 0.5px dashed @gray-light;
  white-space: nowrap;
}
</style>
