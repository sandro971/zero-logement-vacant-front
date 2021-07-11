import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// import * as Cookies from 'js-cookie'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        position: null,
        properties_results: {}
    },
    mutations: {
        setPosition: (state, pos) => state.position = pos
    },
    getters:{
        getPosition: state => state.position
    },
    actions: {
        getPosition({ commit, state }){
            //Paris by default
            const defaultPosition = {
                coords: {
                    accuracy: 897,
                    altitude: null,
                    altitudeAccuracy: null,
                    heading: null,
                    latitude: 16.1939456,
                    longitude: -61.5940096,
                    speed: null
                },
                timestamp: 1622775345927
            }

            return new Promise((resolve, reject)=>{
                if(state.position != null && Object.keys(state.position).length != 0){
                    return resolve(state.position)
                }

                navigator.geolocation.watchPosition(
                    (position)=>{
                        if(Object.keys(position).length == 0){
                            commit('setPosition', defaultPosition)
                            return resolve(defaultPosition)
                        }
                        
                        commit('setPosition', position)
                        resolve(position)
                    }, 
                    () =>{
                        commit('setPosition', defaultPosition)
                        resolve(defaultPosition)
                    },
                    {
                        enableHighAccuracy: true,
                        maximumAge        : 0,
                        timeout           : 27000
                    }
                );
            })
        }
    },
    plugins: [
        createPersistedState()
    ],
    strict: true
})
    
export default store