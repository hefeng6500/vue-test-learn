<template>
    <div>
        <h1>actions属性的应用</h1>
        <div>
            count: {{ countVuex }}
        </div>
        <el-button type="primary" @click="increment">增加</el-button>
    </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      payload: {
        type: "increment",
        amount: 200
      }
    };
  },
  computed: {
      ...mapState({
          countVuex: 'count'
      })
  },
  mounted() {},
  methods: {
    increment() {
      this.$store.dispatch("increment");
    }
  }
};
</script>