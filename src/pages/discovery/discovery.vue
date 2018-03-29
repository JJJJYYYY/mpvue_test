<template>
  <div>
    <div class="top">
      <div class="from">
        <span :class="{active: from === 'hot'}"
          @click="changeFrom('hot')"
          >皮肤中心</span>
        <span>|</span>
        <span :class="{active: from === 'nearby'}"
          @click="changeFrom('nearby')"
          >兑换奖品</span>
      </div>
      <swiper class="cards"
        previous-margin="42rpx" next-margin="50rpx">
        <swiper-item class="_item"
          v-for="(item, index) in list" :key="index">
          <div class="__card">
            <mengCard :info="item" :size="80"/>
          </div>
        </swiper-item>
      </swiper>
      <h5 class="tips">向右滑动选择你的萌卡</h5>
    </div>
    <ul class="list">
      <li v-for="(item, index) in list" :key="index">
        <div class="__card">
          <mengCard :info="item" :size="46"/>
        </div>
        <div>
          <span>酷黑金属</span>
        </div>
      </li>
    </ul>

    <mengbar type='discovery'></mengbar>
  </div>
</template>

<script>
import mengCard from '@/components/mengCard'
import mengbar from '@/components/mengbar'

import info from '@/data/card'

export default {
  components: { mengCard, mengbar },
  data () {
    return {
      list: [info, info, info, info]
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../../global.less);

.top {
  background: @primary;
}
.cards {
  padding: 6px 0;
  height: 43vw;

  .__card {
    width: 80vw;
    margin: 0 auto;
  }
}
.from {
  display: flex;
  width: 100vw;
  justify-content: center;
  font-size: @font;
  line-height: @font + 2px;
  color: #fff;

  > span {
    margin: 1px 5px;

    &.active {
      color: @white;
    }
  }
}
.tips {
  text-align: center;
  font-size: @font;
  padding-bottom: 10px;
  color: @white;
}
.list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  width: 100vw;

  > li {
    flex: 1;
    padding: 0 2vw;
  }

  .__card {
    width: 46vw;
    height: 24vw;
    margin: 0 auto;
  }
}
</style>

