<template>
  <div class="bortherTwo">
    <h1>borther2</h1>
    <div>通信信息： {{ msg }}</div>
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
  border: 1px solid #409eff;
}
</style>

