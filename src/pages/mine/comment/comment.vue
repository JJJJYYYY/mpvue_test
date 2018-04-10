<template>
  <div class="comment">
    <inform v-for="(item, index) in comment" :key='index'
      :formName='item.name' :formHead='item.head'
      :toName='item.to.name' :toHead='item.to.head'
      :operation="'赞了'" :to="'的写真'" :content='item.content'
      :date='item.date'/>
  </div>
</template>

<script>
import inform from '@/components/inform'

import commentData from '@/data/comment'

export default {
  components: { inform },
  data () {
    return {
      comment: [commentData, commentData, commentData, commentData, commentData]
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../../../global.less);

.comment {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: scroll;
  background-color: @bg-color-gray;
}
</style>
