<template>
  <div class="content" >
    <div class=" clearfix">
      <h1 class="title">状态管理器Vuex</h1>
      <div>
        <router-link class="myBtn" to="/index">回首页</router-link>
        <a class="myBtn" href="https://vuex.vuejs.org/zh/guide/" target="_blank">Vuex官方文档</a>
      </div>
      <ul class="mudulesList left clearfix" v-for="(item,index) in mudulesList" :key="index">
        <li class="mudule left">
          <router-link class="myBtn" :to="item.path">{{ item.title}}</router-link>
        </li>
      </ul>
    </div>

    <router-view class="viewContainer"></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      count: 10,
      payload: {},

      mudulesList: [
        { title: 'vuefirst', path: "/vueindex/vuefirst" },
        { title: 'vuesecond', path: "/vueindex/vuesecond" },
        { title: 'vuethird', path: "/vueindex/vuethird" },
        { title: 'vuefourth', path: "/vueindex/vuefourth" },
        ]
    };
  },
  
};
</script>

<style scoped>


.viewContainer{
  margin-top: 40px ;
}


</style>
