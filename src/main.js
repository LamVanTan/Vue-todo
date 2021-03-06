import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
//vue-router
import VueRouter from 'vue-router'
import {routes} from './routes'
import './plugins/bootstrap-vue'
import App from './App.vue'
import store from './store'



Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
	routes
})

let vm = new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

export default vm;
