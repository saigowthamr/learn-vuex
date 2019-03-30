import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        count: 0,
        todo: null
    },
    mutations: {
        INCREMENT_COUNT(state, value) {
            state.count += value
        },
        SET_TODO(state, data) {
            state.todo = data
        }

    },
    actions: {
        getTodo(context) {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(response => response.json())
                .then(firstTodo => {
                    context.commit('SET_TODO', firstTodo)
                })
        }
    }
});



