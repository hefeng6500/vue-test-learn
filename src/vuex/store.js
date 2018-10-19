import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = { //用于存储状态
        count: 0,
        someState: 666,
        todos: [{
                id: 1,
                text: '...',
                done: true
            },
            {
                id: 2,
                text: '...',
                done: false
            }
        ]
    }
    //对state的状态进行一些操作，可以直接写在store里面，不用写到components里面，之后直接this.$store.getters.doneTodos直接获取计数后的状态
const getters = {
    doneTodos: state => {
        return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => { //而且还可以访问其他的getters的属性
        return getters.doneTodos.length
    },

    getTodoById: (state) => (id) => { //通过让 getter 返回一个函数，来实现给 getter 传参
        return state.todos.find(todo => todo.id === id)
    }
}
const mutations = { //存储改变状态的方法
    increment(state, payload) { //Payload就是载荷
        //像这样的异步调用，在浏览器调试工具vue-devtools是无法看到state.count的状态快照的，依然是0
        //因为当 mutation 触发的时候，回调函数还没有被调用，devtools 不知道什么时候回调函数实际上被调用（官方文档的说明）
        //实质上任何在回调函数中进行的状态的改变都是不可追踪的。（官方文档的说明）
        //但是count的状态还是被改变了，只是无法保存状态快照而已！
        //所以说mutations的函数必须是异步的，才能保存状态快照
        //		setTimeout(()=>{
        //			state.count += payload.amount
        //		},2000)

        state.count += payload.amount || 1
    },
    someOtherMutation(state, payload) {
        state.someState += payload.amount
    }
}

//Action 提交的是 mutation，而不是直接变更状态。
//Action 可以包含任意异步操作
const actions = { //显式的提交。
    increment(context, payload) { // 以载荷形式分发
        context.commit('increment', payload)
    },
    //可以发现在actions里面分发commit mutations中的函数，就算在actions是异步的也没关系，仍然可以保存状态快照
    //actions可以异步调用，mutations要同步调用（不是说mutations异步调用不行，其实也行，只是无法获取状态快照了）
    actionA({ commit }, payload) { // 以载荷形式分发
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit("increment", payload)
                resolve()
            }, 1000)
        })
    },
    actionB({ dispatch, commit }, payload) { // 以载荷形式分发;返回Promise对象
        return dispatch('actionA', payload).then(() => {
            commit('someOtherMutation', payload)
        })
    }
}
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store