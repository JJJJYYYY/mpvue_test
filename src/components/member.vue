<template>
  <ul class="member">
    <li v-for="(item, index) in _getMember" :key="index">
      <img :src="item" :style="_imgStyle" />
      <div class="_other" :style="_imgStyle"
        v-if="index === data.member.length - 1">
        {{data.number - data.member.length}}
      </div>
    </li>
  </ul>
</template>

<script>
import { createStyle } from '@/utils/utils'

export default {
  props: {
    data: Object,
    size: {
      type: Number,
      default: 80
    },
    max: {
      type: Number,
      default: 5
    }
  },
  data () {
    return {}
  },
  computed: {
    _getMember () {
      return this.data.member.length < this.max
        ? this.data.member
        : this.data.member.slice(0, 5)
    },
    _imgStyle () {
      let size = ~~(this.size / this.max)

      return createStyle({
        width: `${size}vw`,
        height: `${size}vw`,
        fontSize: `${size / 2}vw`,
        lineHeight: `${size}vw`
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../global.less);

.member {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px 0 6px 0;
  margin: 0 12px;

  > li {
    flex: 1;
    position: relative;
  }

  img {
    border-radius: 50%;
  }

  ._other {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: @font-lg * 1.5;
    color: @white;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
  }
}
</style>
