<template>
  <div class="rank">
    <div class="container">
      <div class="_title">
        <h5>今日投食量榜单</h5>
        <span>今日能量 (克)</span>
      </div>
      <ul class="_list">
        <li v-for="(item, index) in list" :key="index">
          <i><span v-if="index > 2">{{index + 1}}</span></i>
          <img :src="item.head" />
          <p>{{item.name}}</p>
          <span class="__power">{{item.power}}克</span>
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
}
.container {
  width: 94%;
  border-radius: 6px;
}
._list {
  @list-size: 40px;
  > li {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    margin: 0 10px;

    i {
      width: 30px;
      text-align: center;
    }

    img {
      width: @list-size;
      height: @list-size;
      border-radius: 50%;
    }

    p {
      flex: 1;
      padding: 0 10px;
    }
  }

  > li {
    i {
      width: 20px;
      height: @list-size;
      line-height: @list-size;
      background-size: 20px;
      background-position: center;
      background-repeat: no-repeat;
      margin-right: 12px;
    }

    &:nth-child(1) {
      i {
        background-image: url(~@/assets/icon/gold_medal.png);
      }

      .__power {
        color: #ff5057;
      }
    }
    &:nth-child(2) {
      i {
        background-image: url(~@/assets/icon/sliver_medal.png);
      }

      .__power {
        color: #ff5057;
      }
    }
    &:nth-child(3) {
      i {
        background-image: url(~@/assets/icon/copper_medal.png);
      }

      .__power {
        color: #ff5057;
      }
    }
  }
}
.__power {
  font-size: 14px;
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
