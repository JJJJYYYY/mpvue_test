import Vue from 'vue'
import App from './comment.vue'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#f51e57',
    navigationBarTitleText: '个人中心',
    navigationBarTextStyle: '#ffffff'
  }
}
