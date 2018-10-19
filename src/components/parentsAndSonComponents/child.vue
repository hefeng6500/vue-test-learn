<template>
  <div class="child">
    <h1 class="title">子组件</h1>
    <div class="message">来自父组件的信息：<span class="fromParent"> {{ title }}</span></div>
    <el-button type="primary" @click="toParanet()">向父组件传参</el-button>
  </div>
</template>
<script>
export default {
  props: ["title"],
  data() {
    return {
      msg: "i am from child!"
    };
  },
  methods: {
    toParanet() {
      this.$emit('sendParent' , this.msg)
    }
  }
};
</script>
<style scoped>
.child{
  padding: 15px;
  border:1px solid #409eff;
}
.fromParent{
  margin-left: 20px;
  color: #409EFF;
  font-weight: bold;
  font-size: 25px;
}
.message{
  margin: 20px 0;
}
</style>

