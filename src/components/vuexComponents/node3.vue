<template>
    <div>
        <h1>mutations属性的应用</h1>
        <div>count: {{ countVuex }}</div>
        <div>someStateVuex: {{ someStateVuex }}</div>
        <el-button type="primary" @click="add()">增加</el-button>
    </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      locaCount: 100,
      payload: {
          type: 'increment',
          amount: 200
      }
    };
  },
  computed: {
    ...mapState({
      //ES6对象扩展操作符,使用对象展开运算符将此对象混入到外部对象中
      countVuex: state => state.count,
      someStateVuex: state => state.someState,
    })
  },
  methods: {
    ...mapMutations({
      increment: "increment",  //将 `this.increment()` 映射为 `this.$store.commit('increment')`
      someOtherMutation: 'someOtherMutation'
    }),
    add(){
    	this.increment(this.payload)
    	this.someOtherMutation(this.payload)
    }
  }
};
</script>
<style scoped>
</style>

