import Vue from 'vue';
import Vuex from 'vuex';
import { auth } from './auth.js';
import { alerts } from './alerts.js';
import { esrRef } from './esrRef.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        alerts,
        esrRef,
    }
});
