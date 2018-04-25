<template>
  <ul class="member">
    <li v-for="(item, index) in _getMember" :key="index">
      <img :src="item.head" />
      <p class="__item_name">{{item.name}}</p>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    data: Array,
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
      return this.data.length < this.max
        ? this.data
        : this.data.slice(0, this.max)
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../global.less);

.member {
  display: flex;
  padding: 10px 0 6px 0;
  width: 100%;

  > li {
    width: 20%;
    text-align: center;
    position: relative;
  }

  img {
    width: 50px;
    height: 50px;
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
.__item_name {
  font-size: @font-mini;
  line-height: @font-mini;
  margin: 5px 0 10px 0;
}
</style>
