<template>
  <div class="content">
    <h1 class="title">ElementUI</h1>
    <div>
      <router-link class="myBtn" to="/index">回首页</router-link>
      <a class="myBtn" href="http://element-cn.eleme.io/#/zh-CN/component/installation" target="_blank">ElementUI官方文档</a>
      <div class="mudulesList">
        <router-link class="myBtn" to="/fileUpload">文件上传</router-link>
        <router-link class="myBtn" to="/cascader">级联选择器</router-link>
      </div>
    </div>
    <router-view class="view"></router-view>
  </div>
</template>
<script>
  export default{
    
  }
</script>
<style scoped>

</style>