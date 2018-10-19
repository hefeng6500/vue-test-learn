<template>
  <div class="bortherTwo">
    <h1>borther2</h1>
    <div>来自brother1的通信信息： <span class="fromBrother">{{ msg }}</span></div>
  </div>
</template>
<script>
import bus from "../../utils/bus";
export default {
  data() {
    return {
      msg: ""
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      bus.$on("message", res => {
        this.msg = res;
      });
    }
  }
};
</script>
<style scoped>
.bortherTwo {
  padding: 20px;
  border: 1px solid #409eff;
}
.fromBrother{
  margin-left: 20px;
  color: #409EFF;
  font-weight: bold;
  font-size: 25px;
}
</style>

