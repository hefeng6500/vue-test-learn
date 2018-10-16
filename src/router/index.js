import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '../components/index.vue'
import first from '../components/first.vue'
import second from '../components/second.vue'
import three from '../components/three.vue'
import parents from '../components/parents/index'
import child from '../components/child/index'
import borther1 from '../components/noFatherAndSon/borther1' //用于兄弟组件之间的通讯
import borther2 from '../components/noFatherAndSon/borther2'
import vueindex from '../components/vuexComponents/index'
import vuesecond from '../components/vuexComponents/second'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: index
  },
  {
    path: '/index',
    component: index
  },
  {
    path: '/first',
    component: first
  },
  {
    path: '/second',
    component: second
  },
  {
    path: '/three',
    component: three
  },
  {
    path: '/parents',
    component: parents
  },
  {
    path: '/child',
    component: child
  },
  {
    path: '/borther1',
    component: borther1
  },
  {
    path: '/borther2',
    component: borther2
  },
  {
    path: '/vueindex',
    component: vueindex

  },
  {
    path: '/vuesecond',
    component: vuesecond

  }
]

const router = new VueRouter({
  routes
})

export default router