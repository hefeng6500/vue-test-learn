<template>
  <div class="">
    <h1>states属性的应用</h1>
    <div>count: {{ countVuex }}</div>
    <el-button type="primary" @click='increment'>增加</el-button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      count: 10
    };
  },
  // computed: mapState({
  //   // countVuex: state => state.count  //这种es6的箭头函数写法很清晰
  //   // countVuex: "count" //直接使号包括状态属性count
  //   countVuex(state){//获取局部 'this' 值的时候要使用普通函数
  //     return state.count + this.count
  //   }
  // }),

  //当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
  // 映射 this.count 为 store.state.count
  // computed: mapState([
  //   'count'
  // ]),

  
  computed:{//当然也可以这么写，使用this.$store.state获取状态
    // countVuex(){
    //   return this.$store.state.count
    // },
    ...mapState({//ES6对象扩展操作符,使用对象展开运算符将此对象混入到外部对象中
      countVuex: state => state.count
    })
  },
  methods: {
    increment (){
      // this.count++
      this.$store.commit('increment')
    }
  }
};
</script>

<style scoped>

</style>
