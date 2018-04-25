<template>
  <ul class="list">
    <li v-for="(item, index) in data" :key='index'>
      <img class="_cover" :src="item.cover" mode='aspectFill' />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    data: {
      type: Array
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
@trans: transparent;
ul {
  box-sizing: border-box;
  border-top: 2px solid @trans;
  border-left: 2px solid @trans;
}
li {
  width: 50%;
  height: 210px;
  float: left;
  box-sizing: border-box;
  border-bottom: 2px solid @trans;
  border-right: 2px solid @trans;
}
._cover {
  width: 100%;
  height: 100%;
}
</style>
