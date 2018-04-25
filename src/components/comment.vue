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
            <img class="icon_like" src="/assets/icon/like.png" />
            <span class="like_number">{{item.likeNum}}</span>
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
      type: Array
    },
    color: {
      type: String,
      default: '#ddd'
    }
  },
  data () {
    return {
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
  text-align: right;

  img {
    width: 25px;
    height: 25px;
    margin-right: 10px;
    border-radius: 50%;
  }
}
@gray: #444444;
._content {
  flex: 1;
  font-size: @font-sm;
}
.__content {
  font-size: @font;
  line-height: @font + 3px;
}
.__to {
  @size: 10px;
  border-left: 1.5px solid @primary;
  padding: @size 0 @size @size;
  margin: @size 0;
  line-height: @font-sm + 10px;
  .trans-black(0.2);
}
@size: 15px;
.__info {
  padding-bottom: @size;
  margin-bottom: @size;
  border-bottom: 0.5px solid @gray;
  font-size: @font-mini;
  display: flex;
  line-height: @font-sm * 2;

  > div:first-child {
    flex: 1;
  }
  > div:last-child {
    width: 60px;
  }
}
.__head {
  font-size: 13px;
}
.icon_like {
  width: @size;
  height: @size;
  vertical-align: middle;
  padding: 4px;
}
.like_number {
  vertical-align: middle;
}
</style>
