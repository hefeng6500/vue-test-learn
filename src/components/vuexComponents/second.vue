<template>
  <div class="">
    <h1>Getter属性的应用</h1>
    <div>count: {{  doneCount }}</div>
    <div>id: {{  getTodoById(2) }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    // doneTodosCount() {
    //   return this.$store.getters.doneTodosCount
    // },
    // getTodoById(){
    //   return this.$store.getters.getTodoById(2)
    // }
    // ...mapGetters([
    //   //使用对象展开运算符将 getter 混入 computed 对象中
    //   "doneTodos",
    //   "doneTodosCount",
    //   "getTodoById"
    // ])
    ...mapGetters({
      doneCount: "doneTodosCount",
      getTodoById: "getTodoById"
    })
  },
  methods: {}
};
</script>

<style scoped>
</style>
