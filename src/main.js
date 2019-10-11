import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from "./router"

Vue.config.productionTip = false

new Vue({
  name:"main",
  router,  // 封装了 router-view  router-link  $router  $route
  store,  // 每一个组件中都可以使用this.$store
  render: h => h(App)
}).$mount('#app')
