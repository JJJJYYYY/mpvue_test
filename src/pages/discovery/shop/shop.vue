<template>
  <div>
    <div class="top">
      <tab :tabs='tabs' />
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
  </div>
</template>

<script>
import tab from '@/components/base/tab'
import mengCard from '@/components/mengCard'

import info from '@/data/card'

export default {
  components: { mengCard, tab },
  data () {
    return {
      tabs: [
        { name: '皮肤中心', type: 'skin' },
        { name: '兑换奖品', type: 'exchange' }
      ],
      list: [info, info, info, info]
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../../../global.less);

.top {
  background: @primary;
}
.cards {
  padding-top: 50px;
  height: 43vw;

  .__card {
    width: 80vw;
    margin: 0 auto;
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

