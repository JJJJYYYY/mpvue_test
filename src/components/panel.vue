<template>
  <ul class="panel">
    <li v-for="(item, index) in list" :key="index"
      :class="[rank ? '__rank' : '']">
      <img :src="item.head" :style="_imgStyle">
      <span class="_rank" v-if="rank">{{item.rank}}</span>
      <p :class="{marginTop: rank}">{{item.name}}</p>
    </li>
  </ul>
</template>

<script>
import { createStyle } from '@/utils/utils'

export default {
  props: {
    list: Array,
    rank: Boolean
  },
  data () {
    return {}
  },
  computed: {
    _imgStyle () {
      let size = `${~~(80 / this.list.length)}vw`

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
    left: 10px;
    right: 10px;
    bottom: 30px;
    border-radius: @font;
    background: @gray;
  }

  .marginTop {
    margin-top: 10px;
  }

  .__rank {
    img, ._rank {
      border: 2px solid transparent;
    }

    &:nth-child(1) {
      img, ._rank {
        border-color: @gold;
      }
      ._rank {
        background: @gold;
      }
    }

    &:nth-child(2) {
      img, ._rank {
        border-color: @silver;
      }
      ._rank {
        background: @silver;
      }
    }

    &:nth-child(3) {
      img, ._rank {
        border-color: @coppery;
      }
      ._rank {
        background: @coppery;
      }
    }
  }
}
</style>
