<script>
export default {
  created () {}
}
</script>

<style lang="less">
@import url(./global.less);

.button {
  background: @white;
  color: @primary;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  display: inline-block;
  text-align: center;
  padding: 0 16px;
  font-size: @font-lg;

  &.btn-primary {
    background: @primary;
    color: @white;
  }

  &.btn-border {
    border: 1px solid @primary;
  }

  &.disable {
    color: @gray;
    border-color: @gray;
  }
}

.badge {
  position: absolute;
  top: 0;
  right: 4px;
  color: @white;
  padding: 0 2px;
  border-radius: @font-sm;
  font-size: @font-sm;
  background: @primary;
}

.circle_background {
  text-align: center;
  height: 110px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: @primary;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50px;
    left: -50vw;
    width: 200vw;
    height: 200vw;
    border-radius: 50%;
    background: @white;
    z-index: -1;
  }
}

// panel 头部
.container {
  width: 96%;
  margin: 0 auto;
  margin-top: 10px;
  background: @white;
  border-radius: 10px;

  ._title {
    display: flex;
    padding: 15px 6.5px 12px 6.5px;

    img[data-icon] {
      width: 18.5px;
      height: 12px;
      padding-right: 2px;
    }

    > h5 {
      flex: 1;
      font-size: @font;
      color: #444444;
    }

    > a, > span {
      width: 100px;
      text-align: right;
      font-size: @font-sm;
      color: #999999;
    }
  }
}

.tabs {
  display: flex;
  width: 100vw;
  justify-content: center;
  font-size: @font;
  line-height: @font + 2px;

  > span {
    margin: 1px 5px;

    &.active {
      color: @white;
    }
  }
}

.radio {
  display: inline-block;
  min-width: 60px;
  padding: 2px 0px;
  margin-right: 10px;
  font-size: @font;
  border-radius: 20px;
  color: @gray;
  border: 1px solid @gray;
  text-align: center;

  &.checked {
    color: @white;
    background: @primary;
    border-color: @primary;
  }
}

@padding: 6px;
.__voice {
  padding-left: @padding;
  padding-right: @padding * 1.5;
  margin: 0 4px;
  background: @primary;
  border-radius: 6px;
  color: @white;
  font-size: @font-sm;
  position: relative;

  @border: 4px;
  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    border: @border solid transparent;
    border-right-color: @primary;
    left: -(@border * 1.5);
    top: 50%;
    margin-top: -@border;
  }

  >img {
    width: 8px;
    height: 10px;
  }
}
</style>
