import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import store from './plugins/store'


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
