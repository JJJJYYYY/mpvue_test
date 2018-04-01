<template>
  <div class="card" :style="_card">
    <div class="info" :style="_info">
      <h3 class="_name" :style="_info_name">{{info.name}}</h3>
      <div class="_info" :style="_info_info">
        <span :style="_info_info_health"
          ><span>+</span><span>{{info.health}}</span></span>
        <span :style="_info_info_age"
          >{{info.age}}岁</span>
        <span :style="_info_info_star"
          >{{info.star}}</span>
      </div>
    </div>
    <ul class="intro" :style="_intro">
      <li><i></i><span>体重{{info.weight}}kg</span></li>
      <li><i></i><span>{{info.intro}}</span></li>
      <li><i></i><span>能量总值{{info.power}}kg</span></li>
      <li><i></i><span>{{info.like}}个人喜欢我</span></li>
    </ul>
    <img class="head" :src="info.head" :style="_head"/>
    <div class="number" :style="_number">
      <i></i>萌卡号：{{info.number}}
    </div>
  </div>
</template>

<script>
import { createStyle } from '@/utils/utils'

let defaultStyle = {
  style: {
    backgroundImage: 'url(https://thumbnail10.baidupcs.com/thumbnail/31b08b280c89c1348e02e1b260266258?fid=454881984-250528-257546835432287&time=1522332000&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-ASfRTOG4PtCTflO1lMiO%2faA02HI%3d&expires=8h&chkbd=0&chkv=0&dp-logid=2039133953440965348&dp-callid=0&size=c1440_u900&quality=90&vuk=454881984&ft=image)',
    backgroundSize: '100% 100%',
    borderColor: '#000',
    color: '#fff'
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
                color: '#fff',
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
            icon: {
            },
            font: {
            }
          }
        },
        sign: {
          elements: {
            icon: {
            },
            font: {
            }
          }
        },
        power: {
          elements: {
            icon: {
            },
            font: {
            }
          }
        },
        like: {
          elements: {
            icon: {
            },
            font: {
            }
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
}

const defaultSize = 100

export default {
  props: {
    size: {
      type: Number,
      default: defaultSize
    },
    info: {
      type: Object,
      default: {}
    },
    style: {
      type: Object,
      default: defaultStyle
    }
  },
  created () {
    this.style.style.transform = `scale(${this.size / defaultSize})`
  },
  computed: {
    _card () {
      return createStyle(defaultStyle.style)
    },
    _info () {
      return createStyle(defaultStyle.elements.info.style)
    },
    _info_name () {
      return createStyle(defaultStyle.elements.info.elements.name.style)
    },
    _info_info () {
      return createStyle(defaultStyle.elements.info.elements.info.style)
    },
    _info_info_health () {
      return createStyle(defaultStyle.elements.info.elements.info.elements.health.style)
    },
    _info_info_age () {
      return createStyle(defaultStyle.elements.info.elements.info.elements.age.style)
    },
    _info_info_star () {
      return createStyle(defaultStyle.elements.info.elements.info.elements.star.style)
    },
    _intro () {
      return createStyle(defaultStyle.elements.intro.style)
    },
    _head () {
      return createStyle(defaultStyle.elements.head.style)
    },
    _number () {
      return createStyle(defaultStyle.elements.number.style)
    }
  }
}
</script>

<style lang="less" scoped>
@import url(../global.less);

.card {
  position: relative;
  width: 100vw;
  height: 51.5vw;
  border: 4px solid #ccc;
  border-radius: 4vw;
  font-size: @font;
  transform-origin: 0 0;

  > div, > ul, > img {
    position: absolute;
  }
}
</style>
