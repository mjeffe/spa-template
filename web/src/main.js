import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import 'bootstrap/dist/js/bootstrap';
import BootstrapVue from 'bootstrap-vue';
import Notifications from 'vue-notification';
import TrailingDots from './components/spinners/TrailingDots';

// Vue config
Vue.config.devtools = true;
Vue.config.productionTip = false;

// Plugin Installation
Vue.use(BootstrapVue);
Vue.use(Notifications);

// pick one as <app-spinner>
Vue.component('app-spinner', TrailingDots);

// debug code to catch and print uncaught exceptions
/*
window.addEventListener('unhandledrejection', function(event) {
    console.log('uncaught exception!');
    // the event object has two special properties:
    console.log(event.promise); // [object Promise] - the promise that generated the error
    console.log(event.reason); // Error: Whoops! - the unhandled error object
});
*/

// init the auth stuff before instantiating the App
store.dispatch('auth/init')
    .then((resp) => {
        // console.log('Finished running auth/init, bootstrapping Vue.js App');

        window['App'] = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app');
    }).catch((err) => {
        console.log('unable to init App: ', err);
        window.location.href = '/unknown_error.html';
    });
