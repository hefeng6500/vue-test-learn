<template>
  <div>
    <h1>borther1</h1>
    <div>此例子显示非父子组件之间的通信，采用的技术是“中央事件总线”，new Vue，两个组件同时引入，bus.$emit和bus.$on</div>
    <el-button type="primary" @click="sendInfo()">向borther2通信</el-button>
    <borther-two></borther-two>
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
</style>

