require('./bootstrap');
import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import { routes } from './routes';
import storeData from "./store/index"
//support vuex
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.use(VueRouter);

const store = new Vuex.Store(
    storeData
 )
const router = new VueRouter({
    mode: 'history',
    routes
});
new Vue({
  el: '#app',
  router,
  store, //vuex
});