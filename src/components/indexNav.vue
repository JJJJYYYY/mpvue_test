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
  line-height: @font-sm + 5px;
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
</style>
