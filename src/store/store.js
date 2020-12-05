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
        },
        deleteCoord(state, payload){
            console.log(payload.xcoord, payload.ycoord);
            state.coordinates.forEach(element => {
           
               if(element.xcoord == payload.xcoord && element.ycoord == payload.ycoord){
                   console.log(state.coordinates.indexOf(element));
                   state.coordinates.splice(state.coordinates.indexOf(element),1);
               }
           });
         }
    },
    getters: {
        coordinates(state) {
            return state.coordinates
        }
    }

})