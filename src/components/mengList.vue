<template>
  <div class="list">
    <ul class="_left">
      <li v-for="(item, index) in leftList" :key='index'>
        <div :class="{short: index % 2}">
          <img class="__cover" :src="item.cover" />
        </div>
      </li>
    </ul>
    <ul class="_right">
      <li v-for="(item, index) in rightList" :key='index'>
        <div :class="{short: (index + 1) % 2}">
          <img class="__cover" :src="item.cover" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import list from '../data/mengList'

export default {
  data () {
    return {
      leftList: list,
      rightList: list
    }
  },
  methods: {
    getHeight (index) {
      return `${index % 2 ? 100 : 120}px`
    }
  }
}
</script>

<style lang="less" scoped>
.list {
  display: flex;
}
._left, ._right {
  flex: 1;
  width: 50vw;
  display: flex;
  flex-direction: column;
}
.__cover {
  max-height: 100%;
  max-width: 100%;
}
.short {
  height: 200px;
}
</style>
