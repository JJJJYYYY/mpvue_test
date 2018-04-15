<template>
  <div>
    <div class="_head">
      <div class="__head">
        <div>
          <headBox :size='160' :heads='heads' />
        </div>
        <div>
          <p>位铲屎官</p>
          <p>共{{ 2 }}位铲屎官</p>
        </div>
        <div>
          <a class="button">认亲</a>
        </div>
      </div>
      <div class="__card">
        <mengCard :info='card' :size='90' />
      </div>
      <div class="__progress">
        <progress :percent='50' color="red" stroke-width="16"></progress>
        <div>
          <a class="button">投食</a>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="_title">
        <h5>{{'dd'}}</h5>
        <span>查看详情</span>
      </div>
      <member :data='familyData' />
    </div>
    <div class="container">
      <div class="_title">
        <h5>{{'dd'}}</h5>
        <span>查看详情</span>
      </div>
      <albums :data='albums' />
    </div>
    <div class="container">
      <div class="_title">
        <h5>{{'dd'}}</h5>
      </div>
      <comment :data='comment' :color='"pink"' />
    </div>
  </div>
</template>

<script>
import headBox from '@/components/headBox'
import mengCard from '@/components/mengCard'
import member from '@/components/member'
import albums from '@/components/albums'
import comment from '@/components/comment'

import cardData from '@/data/card'
import familyData from '@/data/family'
import commentData from '@/data/comment'

let album = {
  cover: 'http://pic1.win4000.com/wallpaper/2017-10-12/59dee0186a37f.jpg',
  number: 10
}

export default {
  components: { headBox, mengCard, member, albums, comment },
  data () {
    return {
      heads: [
        'http://pic1.win4000.com/wallpaper/2017-10-12/59dee0186a37f.jpg',
        'http://pic1.win4000.com/wallpaper/2017-10-12/59dee0186a37f.jpg',
        'http://pic1.win4000.com/wallpaper/2017-10-12/59dee0186a37f.jpg',
        'http://pic1.win4000.com/wallpaper/2017-10-12/59dee0186a37f.jpg'
      ],
      card: cardData,
      familyData: familyData,
      albums: [ album, album, album ],
      comment: [ commentData, commentData, commentData ]
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../../../global.less);

._head {
  background: @primary;
  padding-bottom: 10px;
}
.__head {
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    &:first-child {
      width: 80px;
      padding: 10px;
    }

    &:nth-child(2) {
      flex: 1;
    }

    &:last-child {
      flex: 1;
      text-align: right;
    }
  }
}
.__progress {
  width: 90%;
  margin: 20px auto;
  display: flex;

  > progress {
    flex: 1;
  }

  > div {
    width: 80px;
    text-align: right;
  }
}

.__card {
  width: 90%;
  margin: 0 auto;
}
</style>
