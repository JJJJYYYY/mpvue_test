<template>
  <div class="nav">
    <ul class="type">
      <li :class="{active: type === 'all'}"
        @click="changeType('all')"
        >所有</li>
      <li :class="{active: type === 'cat'}"
        @click="changeType('cat')"
        >猫</li>
      <li :class="{active: type === 'dog'}"
        @click="changeType('dog')"
        >狗</li>
    </ul>
    <div class="from">
      <span :class="{active: from === 'hot'}"
        @click="changeFrom('hot')"
        >推荐</span>
      <span>|</span>
      <span :class="{active: from === 'nearby'}"
        @click="changeFrom('nearby')"
        >附近</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: 'all',
      from: 'hot'
    }
  },
  methods: {
    changeType (type) {
      this.type = type
      this.$emit('change-type')
    },
    changeFrom (from) {
      this.from = from
      this.$emit('change-from', from)
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../global.less);

.nav {
  position: fixed;
  top: 0;
  left: 0;
  color: darken(@gray, 20%);
  font-size: @font-sm;
  text-align: center;
  z-index: 1;
}
.type {
  position: absolute;
  top: 0;
  left: 12px;
  width: 100px;
  display: flex;
  border: 1px solid @gray;
  border-radius: @font-sm;

  > li {
    flex: 1;

    &.active {
      background: @white;
      border-radius: @font-sm;
      color: @primary;
    }
  }
}
.from {
  display: flex;
  width: 100vw;
  justify-content: center;
  font-size: @font;
  line-height: @font + 2px;

  > span {
    margin: 1px 5px;

    &.active {
      color: @white;
    }
  }
}
</style>
