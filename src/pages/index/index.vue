<template>
  <div>
    <indexNav @change-from='changeFrom'/>
    <swiper v-if="from === 'hot'" class="main" vertical @change="swiperChange">
      <swiper-item v-for="(item, index) in list" :key="index">
        <meng ref="meng" :content="item" @show-comment="showComment"></meng>
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
import mengList from '@/components/mengList'
import mengbar from '@/components/mengbar'
import comment from '@/components/comment'

import { mounteRef } from '@/utils/utils'

import content from '@/data/content'
import commentData from '@/data/comment'

export default {
  components: { indexNav, meng, mengList, mengbar, comment },
  data () {
    return {
      mounted: false,
      current: 0,
      from: 'hot',
      list: [content, content, content],
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
      mounteRef(this)
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

