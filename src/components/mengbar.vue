<template>
  <ul class="mengbar" :style="{ background }">
    <li @click="go" data-type='index'>
      <span :class="{ active: 'index' === type }"
        >萌片</span>
    </li>
    <li @click="go" data-type='discovery'>
      <span :class="{ active: 'discovery' === type }"
        >发现</span>
    </li>
    <li @click="go" data-type='create'>
      <span class="add">+</span>
    </li>
    <li @click="go" data-type='single'>
      <span :class="{ active: 'single' === type }"
        >后宫</span>
    </li>
    <li @click="go" data-type='mine'>
      <span :class="{ active: 'mine' === type }"
        >我的</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'index'
    },
    background: {
      type: String,
      default: '#000'
    }
  },
  data () {
    return {
    }
  },
  methods: {
    go (e) {
      this.$emit('change-tab')
      let type = e.currentTarget.dataset.type
      wx.redirectTo({ url: `/pages/${type}/main` })
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../global.less);
.mengbar {
  display: flex;
  position: fixed;
  bottom: 0;
  height: @btm-height;
  line-height: @btm-height;
  color: @white;
  text-align: center;
  font-size: @font-sm;
  z-index: 100;

  > li {
    flex: 1;
    width: 20vw;

    span.active {
      font-size: @font-lg;
      padding-bottom: 4px;
      border-bottom: 2px solid @white;
    }

    span.add {
      font-size: 22px;
      font-weight: 600;
      padding: 0 20px;
      background:@primary;
      border-radius: 20px;
    }
  }
}
</style>
