<template>
  <div class="index appContainer">
    <header class="header">
      <div class="headerInside clearfix">
        <img class="logo left" src="../assets/logo.png" alt="Vue">
          <ul class="mudulesList left clearfix" v-for="(item,index) in mudulesList" :key="index">
            <li class="mudule left">
              <router-link :to="item.path">{{ item.title}}</router-link>
            </li>
          </ul>
          <div>
            <div>{{ testModdel }}</div>
          </div>
      </div>
    </header>

  </div>
</template>

<script>
import "../directive";
import * as service from "../api/service.js"

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      testModdel: '',
      rows: 5,
      mudulesList: [
        { title: "首页", path: "/index" },
        { title: "父子组件通信", path: "/parents" },
        { title: "非父子组件通信", path: "/borther1" },
        { title: "Vuex", path: "/vueindex" },
        { title: "ElementUI", path: "/elementui" }
      ]
    };
  },
  watch: {
    rows: (val,oldVal)=>{
      if(this.rows > 3) {
        this.rows = 3
        console.log('this.rows')
        console.log(this.rows)
      }
    }
  },
  mounted(){
    service.testApi().then(res=>{
      console.log(res)
      this.testModdel = res
    })
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  width: 100%;
  padding: 5px;
  background: #e3e4e5;
}
.headerInside {
  margin: 0 auto;
  width: 1100px;
}
.logo {
  width: 60px;
  height: 60px;
}
.mudulesList {
  margin-left: 30px;
  height: 60px;
  line-height: 60px;
}
.mudule {
  display: inline-block;
  padding: 0 20px;
  /* background: #52a8ff; */
}
a:hover {
  color: #409eff;
}
</style>
