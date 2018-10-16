<template>
  <div class="hello">
    <h1>首页</h1>
    <span v-n="6"></span>
  </div>
</template>

<script>
import "../directive";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {};
  },
  methods: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
