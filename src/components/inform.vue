<template>
  <div class="inform">
    <div class="_form">
      <img :src="formHead" />
    </div>
    <div class="_content">
      <div class='__operation'>
        <span>@{{ formName }}</span>
        <span>{{ operation }}<span>@{{ toName }}</span>{{ to }}</span>
      </div>
      <p class="__comment">{{ content }}</p>
      <span class="__date">{{ date }}</span>
    </div>
    <div class="_to">
      <img :src="toHead" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    formHead: {
      type: String,
      require: true
    },
    formName: {
      type: String,
      require: true
    },
    toHead: {
      type: String,
      require: true
    },
    toName: {
      type: String,
      require: true
    },
    date: {
      type: String
    },
    operation: {
      type: String
    },
    to: {
      type: String
    },
    content: {
      type: String
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
@import url(../global.less);

.inform {
  display: flex;
  padding: 20px 0;
  background-color: @white;
  margin-bottom: 20px;
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
.__operation {
  font-size: @font;
  display: flex;

  > span {
    &:first-child {
      .omit(60px);
    }

    &:last-child {
      flex: 1;
      text-align: right;

      > span {
        .omit(60px);
      }
    }
  }
}
.__comment {
  font-size: @font;
  min-height: @font * 2;
  max-height: @font * 3;
  overflow: hidden;
  text-overflow: ellipsis;
  // .omit(300px);
  // white-space: pre-wrap;
}
.__date {
  font-size: @font-sm;
}
</style>
