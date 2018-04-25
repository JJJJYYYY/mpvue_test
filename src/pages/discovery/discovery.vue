<template>
  <div class="discovery">
    <div class="background">
      <div class="container">
        <search></search>
      </div>
      <div class="container">
        <div class="_title">
          <h5><img data-icon src="/assets/icon/family.png" />名门望族</h5>
          <a href="./family/main">查看更多</a>
        </div>
        <panel :list="list4"></panel>
      </div>
      <div class="__today_list">
        <div class="container">
          <div class="_title">
            <h5><img data-icon src="/assets/icon/list.png" />今日榜单</h5>
            <a href="./rank/main">查看更多</a>
          </div>
          <panel :list="list5" rank></panel>
        </div>
      </div>
      <div class="banner">
        <img :src="banner">
      </div>
      <div class="marginTop">
        <meng-list :data='mengListData' />
      </div>
      <mengbar type='discovery'></mengbar>
    </div>
  </div>
</template>

<script>
import search from '@/components/search'
import panel from '@/components/panel'
import mengList from '@/components/mengList'
import mengbar from '@/components/mengbar'

import panelData from '@/data/panel'
import mengListData from '@/data/mengList'

export default {
  components: { search, panel, mengList, mengbar },
  data () {
    return {
      list4: [panelData, panelData, panelData, panelData],
      list5: [panelData, panelData, panelData, panelData, panelData],
      banner: '/static/img/pic_shop.png',
      news: {
        title: '绝育',
        abstract: '详情'
      },
      mengListData: mengListData
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../../global.less);

.discovery {
  position: fixed;
  top: 0;
  width: 100%;
  bottom: @btm-height;
  overflow-y: scroll;
  overflow-x: hidden;
  background: lighten(@gray, 8%);
}

.background {
  position: relative;

  @back-height: 40px;
  &::after {
    @circle-size: 140vw;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    // position: absolute;
    width: @circle-size;
    height: @circle-size;
    margin-left: -(@circle-size - 100vw) / 2;
    margin-top: -(@circle-size - @back-height);
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    border-radius: 50%;
    background: @primary;
    z-index: -1;
  }
}

.banner {
  margin-top: 10px;
  height: 100px;

  img {
    width: 100%;
    height: 100%;
  }
}

._news {
  display: flex;

  > img {
    width: 70px;
    height: 70px;
    margin: 10px;
    border-radius: 10px;
  }

  > div {
    flex: 1;
    margin: 10px 0;

    p {
      font-size: @font;
    }
  }
}

.marginTop {
  margin-top: 10px;
}
.__today_list {
  width: 100vw;
  background: @white;

  ._title {
    padding-bottom: 13px;
  }
}
</style>

