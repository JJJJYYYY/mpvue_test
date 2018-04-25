<template>
  <ul class="panel">
    <li v-for="(item, index) in list" :key="index"
      :class="[rank ? '__rank' : '']">
      <img :src="item.head" :style="_imgStyle">
      <span class="_rank" v-if="rank">{{item.rank}}</span>
      <p class="__name" :class="{marginTop: rank}">{{item.name}}</p>
    </li>
  </ul>
</template>

<script>
import { createStyle } from '@/utils/utils'

export default {
  props: {
    size: Number,
    list: Array,
    rank: Boolean
  },
  data () {
    return {}
  },
  computed: {
    _imgStyle () {
      let size = this.size
      if (!size) {
        size = this.list.length === 4
          ? `${~~(80 / this.list.length)}vw`
          : `${~~(70 / this.list.length)}vw`
      }

      return createStyle({
        width: size,
        height: size
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../global.less);

.panel {
  display: flex;
  align-items: center;
  text-align: center;

  > li {
    flex: 1;
    position: relative;
  }

  img {
    max-width: 20vw;
    max-height: 20vw;
    border-radius: 50%;
  }

  ._rank {
    font-size: @font;
    position: absolute;
    left: 15px;
    right: 15px;
    bottom: 48px;
    border-radius: @font;
    background: @gray;
    font-size: 10px;
  }

  .marginTop {
    margin-top: 10px;
  }

  .__rank {
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: 9px 2px;
    padding: 10px;

    img, ._rank {
      border: 1px solid transparent;
    }
    @gray: #aeaeae;
    ._rank {
      color: @gray;
      border-color: @gray;
    }

    &:nth-child(1) {
      background-image: url('~@/assets/icon/gold_crown.png');

      img, ._rank {
        border-color: @gold;
        color: @gold;
      }
      ._rank {
        background: @gold-light;
      }
    }

    &:nth-child(2) {
      background-image: url('~@/assets/icon/sliver_crown.png');

      img, ._rank {
        border-color: @silver;
        color: @silver-dark;
      }
      ._rank {
        background: @silver-light;
      }
    }

    &:nth-child(3) {
      background-image: url('~@/assets/icon/copper_crown.png');

      img, ._rank {
        border-color: @coppery;
        color: @coppery;
      }
      ._rank {
        background: @coppery-light;
      }
    }
  }
}
.__name {
  font-size: 15px;
  color: #444444;
  margin: 2px 0 12px 0;
}
</style>
