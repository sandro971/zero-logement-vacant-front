import Vue from 'vue'
import Vuex from 'vuex'
import dialogsConfig from './store/dialogs'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        dialogsConfig
    }
})
    
export default store