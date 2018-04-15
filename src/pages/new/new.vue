<template>
  <div>
    <swiper class="cards"
      previous-margin="42rpx" next-margin="50rpx">
      <swiper-item class="_item"
        v-for="(item, index) in list" :key="index">
        <div class="__card">
          <mengCard :info="item" :size="80"/>
        </div>
      </swiper-item>
      <swiper-item class="_item">
        <div class="__card">
          <nocard :height='110'/>
        </div>
      </swiper-item>
    </swiper>
    <ul class="menu">
      <li>
        <a href="./album/main">
          <div class="_icon"></div>
          <p>写真</p>
        </a>
      </li>
      <li>
        <a href="./album/main">
          <div class="_icon"></div>
          <p>表情包</p>
        </a>
      </li>
      <li>
        <a href="./album/main">
          <div class="_icon"></div>
          <p>敬请期待</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import mengCard from '@/components/mengCard'
import nocard from '@/components/nocard'

import info from '@/data/card'

export default {
  components: { mengCard, nocard },
  data () {
    return {
      list: [ info ]
    }
  }
}
</script>

<style lang="less" scoped>
.cards {
  padding: 6px 0;
  height: 43vw;

  .__card {
    width: 80vw;
    margin: 0 auto;
  }
}
.menu {
  position: absolute;
  bottom: 60px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  >li {
    width: 100px;
  }
  ._icon {
    display: inline-block;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: red;
  }
}
</style>
