<template>
  <div>
    <h1>父组件</h1>
    <my-child 
    :title="'父组件的信息'"
    @sendParent = "showChildMsg"
    ></my-child>
  </div>
</template>
<script>
import myChild from "../child/index";
export default {
  components: {
    myChild
  },
  methods: {
    showChildMsg(data){
      console.log(data)
      
    }
  }
};
</script>
<style scoped>
</style>

