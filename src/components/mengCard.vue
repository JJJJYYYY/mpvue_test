<template>
  <div class='card' :style='_card'>
    <div class='_card'>
      <div class='info' :style='_info'>
        <h3 class='_name' :style='_info_name'>{{info.name}}</h3>
        <div class='_info' :style='_info_info'>
          <span :style='_info_info_health'
            ><span>+</span><span>{{info.health}}</span></span>
          <span :style='_info_info_age'
            >{{info.age}}岁</span>
          <span :style='_info_info_star'
            >{{info.star}}</span>
        </div>
      </div>
      <ul class='intro' :style='_intro'>
        <li><i></i><span>体重{{info.weight}}kg</span></li>
        <li><i></i><span>{{info.intro}}</span></li>
        <li><i></i><span>能量总值{{info.power}}kg</span></li>
        <li><i></i><span>{{info.like}}个人喜欢我</span></li>
      </ul>
      <img class='head' :src='info.head' :style='_head'/>
      <div class='number' :style='_number'>
        <i></i>萌卡号：{{info.number}}
      </div>
    </div>
    <div v-if='!!family' class='family'>
      <div>
        <i></i>{{__familyName}}
      </div>
      <div>
        <member :data='family' :size='30' :max='4' />
      </div>
    </div>
  </div>
</template>

<script>
import member from '@/components/member'

import { createStyle } from '@/utils/utils'

let defaultStyle = {
  style: {
    backgroundSize: '100% 100%',
    borderColor: '#000',
    color: '#000'
  },
  elements: {
    card: {
      style: {
      },
      elements: {
        info: {
          style: {
            left: '30rpx',
            top: '30rpx',
            width: '50%'
          },
          elements: {
            name: {
              style: {
                fontSize: '42rpx'
              }
            },
            info: {
              style: {
                display: 'flex',
                textAlign: 'center'
              },
              elements: {
                health: {
                  style: {
                    flex: 1,
                    color: '#000',
                    backgroundColor: '#54bbf7',
                    borderRadius: '30rpx'
                  }
                },
                age: {
                  style: {
                    flex: 1
                  }
                },
                star: {
                  style: {
                    flex: 1
                  }
                }
              }
            }
          }
        },
        intro: {
          style: {
            left: '30rpx',
            bottom: '30rpx',
            width: '50%'
          },
          elements: {
            weight: {
              elements: {
                icon: {},
                font: {}
              }
            },
            sign: {
              elements: {
                icon: {},
                font: {}
              }
            },
            power: {
              elements: {
                icon: {},
                font: {}
              }
            },
            like: {
              elements: {
                icon: {},
                font: {}
              }
            }
          }
        },
        head: {
          style: {
            height: '220rpx',
            width: '220rpx',
            top: '42rpx',
            right: '64rpx',
            borderRadius: '50%'
          }
        },
        number: {
          style: {
            right: '174rpx',
            bottom: '30rpx',
            padding: '0 10rpx',
            borderRadius: '30rpx',
            transform: 'translate(50%, 0)',
            color: '#ccc'
          },
          elements: {
            icon: {},
            font: {}
          }
        }
      }
    },
    family: {}
  }
}

const defaultSize = 100

export default {
  components: { member },
  props: {
    size: {
      type: Number,
      default: defaultSize
    },
    info: {
      type: Object,
      default: {}
    },
    family: Object,
    style: {
      type: Object,
      default: defaultStyle
    }
  },
  created () {
    this.style.style.transform = `scale(${this.size / defaultSize})`
  },
  computed: {
    __familyName () {
      return this.family && this.family.name ? `家族：${this.family.name}` : '暂无家族'
    },
    _card () {
      return createStyle(defaultStyle.style)
    },
    _info () {
      return createStyle(defaultStyle.elements.card.elements.info.style)
    },
    _info_name () {
      return createStyle(defaultStyle.elements.card.elements.info.elements.name.style)
    },
    _info_info () {
      return createStyle(defaultStyle.elements.card.elements.info.elements.info.style)
    },
    _info_info_health () {
      return createStyle(
        defaultStyle.elements.card.elements.info.elements.info.elements.health.style
      )
    },
    _info_info_age () {
      return createStyle(
        defaultStyle.elements.card.elements.info.elements.info.elements.age.style
      )
    },
    _info_info_star () {
      return createStyle(
        defaultStyle.elements.card.elements.info.elements.info.elements.star.style
      )
    },
    _intro () {
      return createStyle(defaultStyle.elements.card.elements.intro.style)
    },
    _head () {
      return createStyle(defaultStyle.elements.card.elements.head.style)
    },
    _number () {
      return createStyle(defaultStyle.elements.card.elements.number.style)
    }
  }
}
</script>

<style lang='less' scoped>
@import url(../global.less);

.card {
  border: 4px solid #ccc;
  border-radius: 4vw;
  font-size: @font;
  transform-origin: 0 0;

  ._card {
    position: relative;
    width: 100%;
    height: 50vw;

    > div, > ul, > img {
      position: absolute;
    }
  }
}

.family {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  padding: 4px 2px;
  height: 7vw;
  border-top: 1px solid @gray;

  > div {
    &:nth-child(1) {
      flex: 4;
    }
    &:nth-child(2) {
      flex: 6;
    }
  }
}
</style>
