import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import '@babel/polyfill';
import VueMeta from 'vue-meta';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
};

const app = initializeApp(firebaseConfig);
Vue.prototype.$analytics = getAnalytics(app);

Vue.config.productionTip = false;

Vue.use(VueMeta);
new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
