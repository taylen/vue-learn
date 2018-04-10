import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import s1 from '@/components/s1'
// import s2 from '@/components/s2'
const s1 = () => import('@/components/s1')
const s2 = () => import('@/components/s2')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/s1',
      name: 's1',
      component: s1
    },
    {
      path: '/s2',
      name: 's2',
      component: s2
    }
  ]
})
