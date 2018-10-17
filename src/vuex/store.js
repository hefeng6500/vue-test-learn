import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = { //用于存储状态
    count: 0,
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
        state.count += 100
    }
}

//Action 提交的是 mutation，而不是直接变更状态。
//Action 可以包含任意异步操作
const actions = { //显式的提交。
    increment(context) {
        context.commit('increment')
    }
}
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store