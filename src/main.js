import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import store from './store/index'

const moment = require('moment')
require('moment/locale/fr')

Vue.use(require('vue-moment'), {
	moment
});


store.commit('getPosition')

import dialogsConfig from './dialogs/fr'
Vue.prototype.$dialogsConfig = dialogsConfig


Vue.config.productionTip = false

new Vue({
	router,
	store,
	data:{
	},
	methods: {
		objectToURIquery(obj){
			var str = "";
			for (var key in obj) {
				if (str != "") {
					str += "&";
				}
				str += key + "=" + encodeURIComponent(obj[key]);
			}
			return str
		}
	},
	filters:{
	},
	render: h => h(App)
}).$mount('#app')
