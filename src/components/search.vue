<template>
  <div class="search">
    <icon type="search" size="10" />
    <input type="text" placeholder="搜索" />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import url('../global.less');

.search {
  width: 90%;
  margin: 0 auto;
  background: @white;
  display: flex;
  padding: 4px;
  align-items: center;
  border-radius: 30px;
  margin-top: 10px;

  > icon {
    width: 12px;
    padding: 0 6px;
  }

  > input {
    flex: 1;
    font-size: @font;
  }
}
</style>
