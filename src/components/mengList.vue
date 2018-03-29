<template>
  <ul class="list">
    <li v-for="(item, index) in list" :key='index'>
      <img class="_cover" :src="item.cover" mode='widthFix' />
    </li>
  </ul>
</template>

<script>
import list from '../data/mengList'

export default {
  data () {
    return {
      list: list
    }
  }
}
</script>

<style lang="less" scoped>

@gap: 0.4vw;
.list {
  column-count: 2;
  column-gap: @gap;

  li {
    break-inside: avoid;
    font-size: 0;
    margin-bottom: @gap;
  }
}
._cover {
  max-height: 100%;
  max-width: 100%;
}
.short {
  height: 200px;
}
</style>
