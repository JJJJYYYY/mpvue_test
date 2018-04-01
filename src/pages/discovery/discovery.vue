<template>
  <div class="discovery">
    <div class="background">
      <search></search>
      <div class="container">
        <div class="_title">
          <h5>名门望族</h5>
          <span>查看更多</span>
        </div>
        <panel :list="list4"></panel>
      </div>
      <div class="container">
        <div class="_title">
          <h5>今日榜单</h5>
          <span>查看更多</span>
        </div>
        <panel :list="list5" rank></panel>
      </div>
      <div class="banner">
        <img :src="banner">
      </div>
      <div class="container">
        <div class="_title">
          <h5>科普大事件</h5>
        </div>
        <div class="_news">
          <img :src="banner">
          <div>
            <h5>{{news.title}}</h5>
            <p>{{news.abstract}}</p>
          </div>
        </div>
      </div>
      <div class="marginTop">
        <meng-list />
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

export default {
  components: { search, panel, mengList, mengbar },
  data () {
    return {
      list4: [panelData, panelData, panelData, panelData],
      list5: [panelData, panelData, panelData, panelData, panelData],
      banner: 'http://img.self.com.cn/userfiles/201311/1385379601646_800X565.jpg',
      news: {
        title: '绝育',
        abstract: '详情'
      }
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

._title {
  display: flex;
  padding: 6px;

  > h5 {
    flex: 1;
  }

  > span {
    width: 100px;
    text-align: right;
    font-size: @font;
  }
}

.container {
  width: 92%;
  margin: 0 auto;
  margin-top: 10px;
  background: @white;
  border-radius: 10px;
}

.banner {
  margin-top: 10px;

  img {
    width: 100%;
    height: 100px;
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
</style>

