import Vue from 'vue'
import App from './App.vue'

import store from './store/index'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$store = store

const app = new Vue(App)
app.$mount()

export default {
  config: {
    pages: [ '^pages/new/album/main' ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#000000',
      navigationBarTitleText: '萌咖',
      navigationBarTextStyle: '#ffffff'
    }
  }
}
