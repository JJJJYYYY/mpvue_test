<template>
  <ul class="family">
    <li v-for='(item, index) in list' :key='index'>
      <div class="container">
        <div class="_title">
          <h5>{{item.name}}</h5>
          <span>查看详情</span>
        </div>
        <member :data='item' />
      </div>
    </li>
  </ul>
</template>

<script>
import member from '@/components/member'

import familyData from '@/data/family'

export default {
  components: { member },
  data () {
    return {
      list: [familyData, familyData, familyData, familyData]
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../../../global.less);

.family {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: scroll;
  background: @primary;

  > li {
    padding: 6px 0;
  }
}
</style>
