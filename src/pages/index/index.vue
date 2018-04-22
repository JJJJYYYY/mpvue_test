<template>
  <div class="index">
    <tab :tabs='tabs' @change='changeFrom' />
    <div class="_hot" v-if="from === 'hot'">
      <indexNav @change-from='changeFrom'/>
      <swiper class="main" vertical @change="swiperChange">
        <swiper-item v-for="(item, index) in list" :key="index">
          <meng-video v-if="item.src" ref="meng" :src='item.src' />
          <meng v-else ref="meng" :content="item" @show-comment="showComment" />
        </swiper-item>
      </swiper>
      <div class="_progress">
        <div>
          <div>
            <img src="/static/img/icon_jar.png" />
          </div>
          <p>x{{22}}</p>
        </div>
        <progress :percent="60" :stroke-width='2.5' :color="'pink'" />
      </div>
    </div>
    <div class="_nearby" v-else>
      <mengList :data='mengListData' />
    </div>
    <mengbar type='index'
      @change-tab='changeTab'/>
    <div class="comment" v-if="commentVisibel">
      <img class="bg_img" :src="bgImg" />
      <header>
        <h3>{{commentNum}}条评论</h3>
        <p @click="closeComment">&times;</p>
      </header>
      <div class="_content">
        <comment :data='comment' />
      </div>
      <footer class="input">
        <input type="text" placeholder="来吧，毫无保留地赞美我吧~" />
      </footer>
    </div>
  </div>
</template>

<script>
import indexNav from '@/components/indexNav'
import tab from '@/components/base/tab'
import meng from '@/components/meng'
import mengVideo from '@/components/mengVideo'
import mengList from '@/components/mengList'
import mengbar from '@/components/mengbar'
import comment from '@/components/comment'

import content from '@/data/content'
import mengListData from '@/data/mengList'
// import video from '@/data/video'
import commentData from '@/data/comment'

export default {
  components: { indexNav, tab, meng, mengVideo, mengList, mengbar, comment },
  data () {
    return {
      mounted: false,
      current: 0,
      from: 'hot',
      tabs: [
        { name: '推荐', type: 'hot' },
        { name: '附近', type: 'nearby' }
      ],
      list: [content, content, content],
      mengListData: mengListData,
      comment: [commentData, commentData, commentData],
      commentNum: 123,
      commentVisibel: false
    }
  },

  methods: {
    swiperChange ({ target }) {
      this.$refs.meng[this.current].stop()
      this.$refs.meng[target.current].start()
      this.current = target.current
    },
    changeTab () {
      this.$refs.meng[this.current].stop()
    },
    changeFrom (from) {
      this.from = from
    },
    showComment (id) {
      this.commentVisibel = true
    },
    closeComment () {
      this.commentVisibel = false
    }
  },

  created () {
  },

  mounted () {
    if (!this.mounted) {
      this.$refs.meng = []
      this.$children.forEach(child => {
        if (child.$options._componentTag === 'meng' ||
           child.$options._componentTag === 'meng-video') {
          this.$refs.meng.push(child)
        }
      })
      this.mounted = true
    }

    this.$refs.meng[this.current].start()
  },
  unmounted () {
    this.$refs.meng[this.current].stop()
  }
}
</script>

<style lang="less" scoped>
@import url(../../global.less);

.index, .main, swiper-item {
  width: 100vw;
  height: 100vh;
  background: #000000;
}

@header-height: 36px;
@footer-height: 49px;
@height: 400px;
.comment {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: @height;
  z-index: 150;
  color: @white;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: -2;
  }

  ._content {
    height: @height - @header-height - @footer-height;
    margin-left: 12px;
    padding-right: 25px;
    overflow-y: scroll;
  }
}
.bg_img {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100%;
  filter: blur(7px);
  z-index: -4;
}

header {
  text-align: center;
  color: #aaaaaa;
  margin: 15px 0;
  position: relative;

  h3 {
    font-size: @font-sm;
    line-height: @font-sm;
  }

  p {
    @size: 19px;
    line-height: @font-sm;
    display: inline;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate(0, -50%);
    vertical-align: top;
    padding: 6px 0 10px 0;
  }
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #1d1d1d;

  input {
    font-size: 15px;
    padding: 0 12px;
    height: @footer-height;
    line-height: @footer-height;
  }
}
._progress {
  position: fixed;
  width: 100%;
  bottom: @btm-height;
  background: @white;
  width: 75px;
  border-radius: 10px 10px 0 0;
  text-align: center;

  >div {
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 6px 10px 0 10px;
    font-size: @font-sm;

    >p {
      flex: 1;
    }

    >div {
      text-align: center;
    }
  }

  img {
    width: 20px;
    height: 20px;
    margin-right: 6px;
  }

  progress {
    width: 100vw;
  }
}
._hot, ._nearby  {
  width: 100%;
  position: absolute;
  bottom: @btm-height;
}
._hot {
  top: 0;
}
._nearby{
  top: 30px;
  overflow-y: scroll;
}
</style>

