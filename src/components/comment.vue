<template>
  <div class="comment" v-if="visible">
    <img class="bg_img" :src="bgImg" />
    <header>
      <i></i>
      <span>{{number}}条评论</span>
      <icon type="clear" size="14"
        @click="close"/>
    </header>
    <ul class="content">
      <li v-for="(item, index) in data" :key='index'>
        <div class="_head">
          <img :src="item.head">
        </div>
        <div class="_content">
          <p class="__head">{{item.name}}</p>
          <p class="__content">{{item.content}}</p>
          <div class="__to" v-if="item.to">
            <p>{{item.to.name}}</p>
            <p>{{item.to.content}}</p>
          </div>
          <div class="__info">
            <div>{{item.date}}</div>
            <span>
              <icon type="clear" size="18" />{{item.likeNum}}
            </span>
          </div>
        </div>
      </li>
    </ul>
    <footer class="input">
      <input type="text" placeholder="来吧，毫无保留地赞美我吧~" />
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      default: 0
    },
    data: {
      type: Array,
      default: []
    },
    bgImg: {
      type: String,
      default: 'http://img.self.com.cn/userfiles/201311/1385379601646_800X565.jpg'
    }
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    close () {
      this.visible = false
    },
    show () {
      this.visible = true
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../global.less);

@header-height: 36px;
@footer-height: 50px;
@height: 400px;
.comment {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: @height;
  z-index: 150;
  color: @white;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: -2;
  }
}
.bg_img {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100%;
  filter: blur(7px);
  z-index: -4;
}

header {
  display: flex;
  height: @header-height;
  text-align: center;
  line-height: @header-height;
  color: @gray;

  icon, i {
    width: 20px;
  }

  span {
    flex: 1;
    font-size: @font-sm;
  }
}
.content {
  height: @height - @header-height - @footer-height;
  overflow-y: scroll;

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
  border-left: 3px solid @gray;
  padding: 5px 0 5px 10px;
  line-height: @font-sm + 10px;
}
.__info {
  border-bottom: 0.5px solid (@gray);
  display: flex;
  line-height: @font-sm * 2;

  > div:first-child {
    flex: 1;
  }
  > div:last-child {
    width: 60px;
  }
}

footer {
  position: absolute;
  bottom: 0;
  width: 96%;
  padding: 0 2%;

  input {
    height: @footer-height;
    line-height: @footer-height;
  }
}
</style>
