<template>
  <div class="rank">
    <div>
      <div class="_title">
        <h3>今日投食量榜单</h3>
        <span>今日能量（克）</span>
      </div>
      <ul class="_list">
        <li v-for="(item, index) in list" :key="index">
          <i><span v-if="index > 2">{{index + 1}}</span></i>
          <img :src="item.head" />
          <p>{{item.name}}</p>
          <span>{{item.power}}克</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import feedData from '@/data/feed'

export default {
  data () {
    return {
      list: [feedData, feedData, feedData, feedData, feedData, feedData]
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../../../global.less);

.rank {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: @primary;
  overflow-y: scroll;

  > div {
    margin: 20px 16px;
    border-radius: 10px;
    background: @white;
  }
}

._list {
  > li {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    margin: 0 10px;
    border-top: 1px solid @gray;

    i {
      width: 30px;
      text-align: center;
    }

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    p {
      flex: 1;
      padding: 0 10px;
    }
  }

  > li {
    &:nth-child(1) {
      i {
        background: @gold;
        height: 20px;
      }
    }
    &:nth-child(2) {
      i {
        background: @silver;
        height: 20px;
      }
    }
    &:nth-child(3) {
      i {
        background: @coppery;
        height: 20px;
      }
    }
  }
}

._title {
  display: flex;
  justify-content: center;
  align-items: center;

  > h3, > span {
    flex: 1;
  }

  > span {
    text-align: right;
  }
}
</style>
