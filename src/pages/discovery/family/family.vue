<template>
  <ul class="family">
    <li v-for='(item, index) in list' :key='index'>
      <div class="container">
        <div class="_title">
          <h5>{{item.name}}</h5>
          <span>查看全部 ({{8}}) </span>
        </div>
        <member :data='item.member' />
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
  background: rgb(241, 241, 241);

  > li {
    margin-top: 10px;
    background: @white;
  }
}
.container {
  width: 100%;
  margin: 0;

  >._title {
    padding-left: 0;
    padding-right: 0;
    margin: 0 12px;
  }
}
</style>
