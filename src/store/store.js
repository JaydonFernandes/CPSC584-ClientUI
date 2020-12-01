import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        coordinates: [
           
        ]
    },
    mutations: {
        addCoordinates(state, payload) {
            state.coordinates.push(payload)
        }
    },
    getters: {
        coordinates(state) {
            return state.coordinates
        }
    }

})