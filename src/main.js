import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
export const EventBus = new Vue()
new Vue({
  el: '#app',
  render: h => h(App)
})
