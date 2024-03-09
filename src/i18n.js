import en from './locales/en.json';
import tm from './locales/tm.json';
import tg from './locales/tg.json';
import VueI18n from 'vue-i18n';
import Vue from 'vue';

Vue.use(VueI18n);
export default new VueI18n( {
locale: localStorage.getItem('lang') || 'en',
messages:{
    en: en,
    tm: tm,
    tg: tg
}
})