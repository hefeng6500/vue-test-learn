<template>
  <div class="appContainer">
    <h1 class="title">父组件</h1>
    <div>
      <router-link class="myBtn" to="/index">回首页</router-link>
    </div>
    <div class="message">
      fromChild: <span class="fromChild">{{ fromChild }}</span>
    </div>
    <my-child 
    :title="'父组件的信息'"
    @sendParent = "showChildMsg"
    ></my-child>
  </div>
</template>
<script>
import myChild from './child'
export default {
  data(){
    return{
      fromChild: ''
    }
  },
  components: {
    myChild
  },
  methods: {
    showChildMsg(data){
      console.log(data)
      this.fromChild = data
      
    }
  }
};
</script>
<style scoped>
.message{
  margin: 20px 0;
}
.fromChild{
  margin-left: 20px;
  color: #409EFF;
  font-weight: bold;
  font-size: 25px;
}
</style>

