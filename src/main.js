import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
//font awesome Icons
import "../node_modules/@fortawesome/fontawesome-free/css/all.css"

//Bootstrap CSS, JS
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import VueI18n from 'vue-i18n';
import "./style.css"
import VueSimpleAlert from "vue-simple-alert";
import i18n from './i18n';

Vue.use(VueSimpleAlert);
Vue.use(Vuelidate)
Vue.use(VueI18n);
// createApp(App)
//     .use(store)
//     .use(router)
//     .use(Vuelidate)
//     .mount('#app');


new Vue({
    i18n,
    router,
    render: h=>h(App)
}).$mount('#app')
