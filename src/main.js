import Vue from 'vue'
import App from './App.vue'
import { BProgress } from 'bootstrap-vue'
Vue.component('b-progress', BProgress)
new Vue({
  el: '#app',
  render: h => h(App)
})
