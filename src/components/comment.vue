<template>
  <ul class="content">
    <li v-for="(item, index) in data" :key='index'>
      <div class="_head">
        <img :src="item.head">
      </div>
      <div class="_content">
        <p class="__head">{{item.name}}</p>
        <p class="__content">{{item.content}}</p>
        <div class="__to" v-if="item.to" :style='_borderColor'>
          <p>{{item.to.name}}</p>
          <p>{{item.to.content}}</p>
        </div>
        <div class="__info" :style='_borderColor'>
          <div>{{item.date}}</div>
          <span>
            <icon type="clear" size="18" />{{item.likeNum}}
          </span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: []
    },
    color: {
      type: String,
      default: '#ddd'
    }
  },
  data () {
    return {
      visible: true
    }
  },
  computed: {
    _borderColor () {
      return `border-color:${this.color};`
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../global.less);

.content {
  > li {
    display: flex;
  }
}

._head {
  width: 60px;
  text-align: right;

  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 50%;
  }
}

._content {
  flex: 1;
  font-size: @font-sm;
}
.__content {
  font-size: @font;
}
.__to {
  border-left: 3px solid @primary;
  padding: 5px 0 5px 10px;
  line-height: @font-sm + 10px;
}
.__info {
  border-bottom: 0.5px solid @gray;
  display: flex;
  line-height: @font-sm * 2;

  > div:first-child {
    flex: 1;
  }
  > div:last-child {
    width: 60px;
  }
}
</style>
