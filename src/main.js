// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
// import Home from './components/HelloFromVux'
import Login from './components/pages/login'
import Registe from './components/pages/registe'

Vue.use(VueRouter)

const routes = [{
  path: '/login',
  name: 'login',
  component: Login
}, {
	path:'/registe',
	name:'registe',
	component:Registe
}, {
  path: '*',
  redirect: { name: 'login' }
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
