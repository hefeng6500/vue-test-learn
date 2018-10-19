import Vue from 'vue'
import VueRouter from 'vue-router'

import index from '../components/index'
import first from '../components/node1'
import second from '../components/node2'
import three from '../components/node3'

import parents from '../components/parentsAndSonComponents/parent' //父子组件通信
import child from '../components/parentsAndSonComponents/child'

import borther1 from '../components/bortherComponents/borther1' //用于兄弟组件之间的通讯
import borther2 from '../components/bortherComponents/borther2'

import vueindex from '../components/vuexComponents/index' //vuex通信
import vuefirst from '../components/vuexComponents/node1'
import vuesecond from '../components/vuexComponents/node2'
import vuethird from '../components/vuexComponents/node3'
import vuefourth from '../components/vuexComponents/node4'


import login from '../components/user/login'



Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: login
    },
    {
        path: '/login',
        component: login
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
        component: vueindex,
        children: [{
                path: '/',
                component: vuefirst,
            }, {
                path: 'vuefirst',
                component: vuefirst,
            }, {
                path: 'vuesecond',
                component: vuesecond,
            }, {
                path: 'vuethird',
                component: vuethird,
            },
            {
                path: 'vuefourth',
                component: vuefourth,
            }
        ]
    },
    {
        path: '/vuesecond',
        component: vuesecond

    },
    {
        path: '/vuethird',
        component: vuethird
    },
    {
        path: '/vuefourth',
        component: vuefourth
    }
]

const router = new VueRouter({
    routes
})

export default router