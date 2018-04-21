import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home/Home.vue';
import Wenti from '../components/Wenti/Wenti.vue';
import Version from '../components/Version/Version.vue';
import Details from '../components/Details/Details.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {path: '', redirect: '/home'},
    {path: '/home', name: 'home', component: Home},
    {path: '/wenti/:details', name: 'wenti', component: Wenti, props:true},
    {path: '/version/:jsonurl', name: 'version', component: Version, props:true},
    {path: '/details/:message', name:'details', component:Details, props:true}
  ]
});
