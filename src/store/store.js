import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        coordinates: [],
        tiles: [
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false
        ],
        temp: 0,
        noise: false
    },
    mutations: {
        addCoordinates(state, payload) {
            state.coordinates.push(payload)
        },
        deleteCoord(state, payload){
            console.log(payload.xcoord, payload.ycoord);
            state.coordinates.forEach(element => {
           
               if(element.xcoord == payload.xcoord && element.ycoord == payload.ycoord){
                   console.log(state.coordinates.indexOf(element));
                   state.coordinates.splice(state.coordinates.indexOf(element),1);
               }
           });
         },
         updateTemp(state, payload) {
            state.temp = payload;
         },
         updateNoise(state, payload) {
             state.noise = payload;
         }

    },
    getters: {
        coordinates(state) {
            return state.coordinates
        },
        temp(state) {
            return state.temp
        },
        noise(state) {
            return state.noise
        }
    }

});