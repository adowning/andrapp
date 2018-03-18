// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import colors from 'vuetify/es5/util/colors'

// $body-background#2e3440
// $body-color#d8dee9
// $table-hover-background#3b4252
// $item-highlight-color#434c5e
// $item-selected-color#434c5e
Vue.use(Vuetify, {
  theme: {
    primary: '#2e3440', // #E53935
    secondary: '#d8dee9', // #FFCDD2
    accent: '#434c5e' // #3F51B5
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
