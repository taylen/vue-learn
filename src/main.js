// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './components/App'
import ButtonCounter from './components/counter'
import TodoList from './components/todo'

Vue.config.productionTip = false

Vue.component('App', App)
Vue.component('button-counter', ButtonCounter)
Vue.component('todo-list', TodoList)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: {
  //   App
  // },
  router,
  // template: '<App/>'
  render: h => h(App)
})
