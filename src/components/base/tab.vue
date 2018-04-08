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
