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
ul {
  box-sizing: border-box;
  border-top: 2px solid #000;
  border-left: 2px solid #000;
}
li {
  width: 50%;
  height: 210px;
  float: left;
  box-sizing: border-box;
  border-bottom: 2px solid #000;
  border-right: 2px solid #000;
}
._cover {
  width: 100%;
  height: 100%;
}
</style>
