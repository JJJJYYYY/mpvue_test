<template>
  <div class="single">
    <div class="tabs">
      <span :class="{active: type === tabs[0].type}"
        @click="change(tabs[0].type)"
        >{{tabs[0].name}}</span>
      <span>|</span>
      <span :class="{active: type === tabs[1].type}"
        @click="change(tabs[1].type)"
        >{{tabs[1].name}}</span>
    </div>
    <div v-if="type === tabs[0].type" class="_card">
      <div>
        <meng-card :info='info' :family='family' :size='90' />
      </div>
      <div>
        <meng-card :info='info' :family='family' :size='90' />
      </div>
      <div>
        <nocard :height='160'/>
      </div>
      <div>
        <nocard :height='45' />
      </div>
    </div>
    <div v-else class="_card">
      <div>
        <meng-card :info='info' :family='family' />
      </div>
      <div class="_family">
        <familyCard />
      </div>
    </div>
    <mengbar type='single'></mengbar>
  </div>
</template>

<script>
import mengCard from '@/components/mengCard'
import familyCard from '@/components/familyCard'
import nocard from '@/components/nocard'
import mengbar from '@/components/mengbar'

import info from '@/data/card'
import family from '@/data/family'

export default {
  components: { mengCard, familyCard, nocard, mengbar },
  data () {
    return {
      type: 'card',
      tabs: [
        { name: '我的萌卡', type: 'card' },
        { name: '我的后宫', type: 'single' }
      ],
      info: info,
      family: family
    }
  },
  methods: {
    change (type) {
      this.type = type
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../../global.less);
.single {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: @btm-height;
  overflow-y: scroll;
}

.tabs {
  background: @primary;
  height: 40px;
  line-height: 40px;
}

._card {
  width: 90vw;
  margin: 0 auto;

  > div {
    margin-top: 20px;
  }
}
</style>
