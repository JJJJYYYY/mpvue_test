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
    <comment :data='comment' :number='commentNum' />
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
import video from '@/data/video'
import commentData from '@/data/comment'

export default {
  components: { indexNav, meng, mengVideo, mengList, mengbar, comment },
  data () {
    return {
      mounted: false,
      current: 0,
      from: 'hot',
      list: [content, content, video, content],
      comment: [commentData, commentData, commentData],
      commentNum: 123
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
      this.$refs.comment.show()
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
.main, swiper-item {
  width: 100vw;
  height: 100vh;
  background: #000000;
}
</style>

