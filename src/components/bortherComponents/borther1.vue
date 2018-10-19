<template>
  <div class="appContainer">
    <h1 class="title">borther1</h1>
    <div class="paragraph">此例子显示非父子组件之间的通信，采用的技术是“中央事件总线”，new Vue，两个组件同时引入，bus.$emit和bus.$on</div>
    <div>
      <router-link class="myBtn" to="/index">回首页</router-link>
      <el-button class="myBtn" type="primary" @click="sendInfo()">向borther2通信</el-button>
      <a class="myBtn" href="https://blog.csdn.net/hefeng6500/article/details/78268375" target="_blank">中央事件总线教程</a>
    </div>
    
    <borther-two class="bortherTwo"></borther-two>
  </div>
</template>
<script>
import bus from "../../utils/bus";
import bortherTwo from "./borther2";
export default {
  data() {
    return {
      msg: "通信数据0000"
    };
  },
  components: {
    bortherTwo
  },
  methods: {
    sendInfo() {
      bus.$emit("message", this.msg);
    }
  },
  mounted() {}
};
</script>
<style scoped>
.paragraph{
  margin: 20px 0;
}
.bortherTwo{
  margin-top: 20px;
}
</style>

