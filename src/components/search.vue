<template>
  <div class="search">
    <icon type="search" size="16" />
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
  width: 100%;
  background: @white;
  display: flex;
  padding: 2px 0;
  align-items: center;
  border-radius: 35px;
  color: #aaaaaa;
  font-size: @font;

  > icon {
    width: 12px;
    padding: 0 10px 0 15px;
  }

  > input {
    flex: 1;
  }
}
</style>
