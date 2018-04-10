import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
App.mpType = 'app'

App.config = App.config || {}

const app = new Vue(App)
app.$mount()

export default {
  config: {
    pages: [ '^pages/mine/confirm/main' ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#000000',
      navigationBarTitleText: '萌咖',
      navigationBarTextStyle: '#ffffff'
    },
    debug: true
  }
}
