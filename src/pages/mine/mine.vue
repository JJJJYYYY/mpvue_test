<template>
  <div class="mine">
    <div class="circle_background">
      <img src="http://pic1.win4000.com/mobile/5/59705d3a76aec.png">
      <h3>坏猫先生</h3>
      <small>已有{{2}}张萌卡</small>
    </div>
    <ul class="menu">
      <li>
        <i class="badge">999+</i>
        <icon type="waiting" size="30" />
        <span>待确认</span>
      </li>
      <li>
        <i class="badge">999</i>
        <icon type="waiting" size="30" />
        <span>{{125}}粉丝</span>
      </li>
      <li>
        <i class="badge">999</i>
        <icon type="waiting" size="30" />
        <span>{{'1.5W'}}获赞</span>
      </li>
      <li>
        <i class="badge">999</i>
        <icon type="waiting" size="30" />
        <span>评论</span>
      </li>
    </ul>
    <div class="record">
      <i>i</i>
      <span>投食记录</span>
      <i>></i>
    </div>
    <ul class="tab">
      <li class="active">写真集{{18}}</li>
      <li>关注{{25}}</li>
      <li>喜欢{{198}}</li>
    </ul>
    <ul class="list">
      <li>
        <i class="like">{{524}}</i>
        <img src="http://pic1.win4000.com/mobile/5/59705d3a76aec.png">
        <i class="number">{{8}}</i>
      </li>
      <li>
        <i class="like">{{524}}</i>
        <img src="http://pic1.win4000.com/mobile/5/59705d3a76aec.png">
        <i class="number">{{8}}</i>
      </li>
      <li>
        <i class="like">{{524}}</i>
        <img src="http://pic1.win4000.com/mobile/5/59705d3a76aec.png">
        <i class="number">{{8}}</i>
      </li>
      <li>
        <i class="like">{{524}}</i>
        <img src="http://pic1.win4000.com/mobile/5/59705d3a76aec.png">
        <i class="number">{{8}}</i>
      </li>
    </ul>
    <mengbar type='mine'></mengbar>
  </div>
</template>

<script>
import mengbar from '@/components/mengbar'

export default {
  components: { mengbar },
  config: {}
}
</script>

<style lang="less" scoped>
@import url(../../global.less);

.mine {
  position: fixed;
  top: 0;
  bottom: @btm-height;
  left: 0;
  overflow-x: hidden;
  overflow-y: scroll;
}
.circle_background {
  @head-size: 70px;

  img {
    width: @head-size;
    height: @head-size;
    border: 3px solid @white;
    border-radius: 50%;
    margin-top: 10px;
  }

  small {
    color: @gray;
    font-size: @font;
  }
}
.menu {
  display: flex;
  text-align: center;

  > li {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    border-left: 1px solid #eee;

    > icon {
      padding: 10px 0;
    }

    > span {
      font-size: @font;
    }
  }
}
.record {
  display: flex;
  text-align: center;
  padding: 10px 0;

  > icon, > i {
    flex: 1;
  }

  > span {
    flex: 8;
    text-align: left;
  }
}
.tab {
  display: flex;
  text-align: center;

  > li {
    flex: 1;
    line-height: 50px;

    &.active {
      background: @primary;
      color: @white;
    }
  }
}

.list {
  font-size: 0;
  padding: 1vw;

  > li {
    width: 48vw;
    height: 48vw;
    float: left;
    margin: .5vw;
    position: relative;

    >img {
      width: 100%;
      height: 100%;
    }

    > i {
      position: absolute;
      display: inline-block;
      font-size: @font;
      bottom: 2px;
      z-index: 10;
      color: @white;
    }

    > .like {
      left: 6px;
    }

    > .number {
      right: 6px;
    }
  }
}
</style>

