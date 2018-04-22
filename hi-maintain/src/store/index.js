import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import buyphone from './buyphone'

const store = new Vuex.Store ({
	modules: {
		buyphone
	}
})

export default store