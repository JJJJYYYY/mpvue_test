<template>
  <div class="tab">
    <span :class="{active: type === tabs[0].type}"
      @click="change(tabs[0].type)"
      >{{tabs[0].name}}</span>
    <span>|</span>
    <span :class="{active: type === tabs[1].type}"
      @click="change(tabs[1].type)"
      >{{tabs[1].name}}</span>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Object,
      default () {
        return [
          {type: '', name: ''},
          {type: '', name: ''}
        ]
      }
    }
  },
  created () {
    this.type = this.tabs[0].type
  },
  data () {
    return {
      type: ''
    }
  },
  methods: {
    change (type) {
      this.type = type
      this.$emit('change', type)
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../../global.less);

.tab {
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: @font-sm;
  line-height: @font-sm + 2px;
  color: @gray;
  z-index: 10;

  > span {
    margin: 1px 5px;

    &:nth-child(2) {
      font-size: 10px;
    }

    &.active {
      color: @white;
    }
  }
}
</style>
