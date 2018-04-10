<template>
  <div class="likes">
    <inform v-for="(like, index) in likes" :key='index'
      :formName='like.formName' :formHead='like.formHead'
      :toName='like.toName' :toHead='like.toHead'
      :operation="'赞了'" :to="'的写真'"
      :date='like.date'/>
  </div>
</template>

<script>
import inform from '@/components/inform'

import likeData from '@/data/like'

export default {
  components: { inform },
  data () {
    return {
      likes: [likeData, likeData, likeData, likeData, likeData]
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../../../global.less);

.likes {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: scroll;
  background-color: @bg-color-gray;
}
</style>
