<template>
  <div class="inform">
    <div class="_form">
      <img :src="''" />
    </div>
    <div class="_content">
      <div class>
        <span>{{ 'name' }}</span>
        <span>{{ 'operation' }}</span>
      </div>
      <p>{{ 'content' }}</p>
      <span>{{ 'date' }}</span>
    </div>
    <div class="_to">
      <img :src="''" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.inform {
  display: flex;
  padding: 20px 0;
}
._form {
  width: 70px;
  text-align: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: red;
  }
}
._content {
  flex: 1;
}
._to {
  width: 100px;
  text-align: center;

  img {
    width: 80px;
    height: 80px;
    border-radius: 10px;
    background: red;
  }
}
</style>
