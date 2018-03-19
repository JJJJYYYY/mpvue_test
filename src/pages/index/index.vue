<template>
  <div>
    <indexNav/>
    <swiper class="main" vertical @change="swiperChange">
      <swiper-item v-for="(item, index) in list" :key="index">
        <meng ref="meng" :content="item"></meng>
      </swiper-item>
    </swiper>
    <mengbar type='index' @change-tab='changeTab'/>
  </div>
</template>

<script>
import indexNav from '@/components/indexNav'
import meng from '@/components/meng'
import mengbar from '@/components/mengbar'

import content from '@/data/content'

export default {
  components: { indexNav, meng, mengbar },
  data () {
    return {
      current: 0,
      list: [content, content, content]
    }
  },

  methods: {
    swiperChange ({ target }) {
      // this.$children[this.current].stop()
      // this.$children[target.current].start()
      // this.current = target.current
    },
    changeTab () {
      // this.$children[this.current].stop()
    }
  },

  mounted () {
    // this.$children[0].start()
  }
}
</script>

<style lang="less" scoped>
.main {
  width: 100vw;
  height: 100vh;
  background: #000000;
}
</style>

