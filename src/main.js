import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts' //引入echarts
import axios from 'axios' //引入echarts

import router from './router'
import store from './vuex/store'

import './css/index.css'

Vue.use(ElementUI);
Vue.prototype.$echarts = echarts //引入组件
Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')