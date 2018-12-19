import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import state from './state'; //  .js 后缀可省略
import * as getters from './getter';
import * as mutations from './mutations';
import * as actions from './actions';
let store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
export default store
// export {store}