<template>
  <div>
    <indexNav @change-from='changeFrom'/>
    <swiper v-if="from === 'hot'" class="main" vertical @change="swiperChange">
      <swiper-item v-for="(item, index) in list" :key="index">
        <meng-video v-if="item.src" ref="meng" :src='item.src' />
        <meng v-else ref="meng" :content="item" @show-comment="showComment" />
      </swiper-item>
    </swiper>
    <mengList v-else/>
    <mengbar type='index'
      background='transparent'
      @change-tab='changeTab'/>
    <div class="comment" v-if="commentVisibel">
      <img class="bg_img" :src="bgImg" />
      <header>
        <i></i>
        <span>{{commentNum}}条评论</span>
        <icon type="clear" size="14" @click="closeComment"/>
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
import meng from '@/components/meng'
import mengVideo from '@/components/mengVideo'
import mengList from '@/components/mengList'
import mengbar from '@/components/mengbar'
import comment from '@/components/comment'

import content from '@/data/content'
// import video from '@/data/video'
import commentData from '@/data/comment'

export default {
  components: { indexNav, meng, mengVideo, mengList, mengbar, comment },
  data () {
    return {
      mounted: false,
      current: 0,
      from: 'hot',
      list: [content, content, content],
      comment: [commentData, commentData, commentData],
      commentNum: 123,
      commentVisibel: true
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

.main, swiper-item {
  width: 100vw;
  height: 100vh;
  background: #000000;
}

@header-height: 36px;
@footer-height: 50px;
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
  display: flex;
  height: @header-height;
  text-align: center;
  line-height: @header-height;
  color: @gray;

  icon, i {
    width: 20px;
  }

  span {
    flex: 1;
    font-size: @font-sm;
  }
}

footer {
  position: absolute;
  bottom: 0;
  width: 96%;
  padding: 0 2%;

  input {
    height: @footer-height;
    line-height: @footer-height;
  }
}
</style>

