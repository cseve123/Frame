import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
// import Bus from './components/ComponentsVue/event'
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

new Vue({
  // router,
  store,
  render: h => h(App)
}).$mount('#app')
