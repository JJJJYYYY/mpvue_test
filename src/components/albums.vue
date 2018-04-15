<template>
  <div class="albums">
    <div v-for="(item, index) in _getData" :key="index">
      <img :src="item.cover" />
      <span>{{ item.number }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      require: true
    }
  },
  computed: {
    _getData () {
      return this.data.length < 4
        ? this.data
        : this.data.slice(0, 4)
    }
  }
}
</script>

<style lang="less" scoped>
.albums {
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    padding: 1vw;
    position: relative;
  }
  > div, img {
    width: 28vw;
    height: 28vw;
  }
  span {
    position: absolute;
    bottom: 1vw;
    right: 2vw;
  }
}
</style>
