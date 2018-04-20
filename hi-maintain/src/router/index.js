import Vue from 'vue'
import Router from 'vue-router'


import Home from '../components/Home/Home.vue'
import Wenti from '../components/Wenti/Wenti.vue'
import Version from '../components/Version/Version.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '', redirect: '/home'},
    {path: '/home', name: 'home', component: Home},
    {path: '/wenti', name: 'wenti', component: Wenti},
    {path: '/version', name: 'version', component: Version}
  ]
})
