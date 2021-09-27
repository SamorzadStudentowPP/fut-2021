import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import '@babel/polyfill';
import VueMeta from 'vue-meta';
import { firebase } from '@firebase/app';
import '@firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.ANALYTICS_API_KEY,
  authDomain: process.env.ANALYTICS_AUTH_DOMAIN,
  projectId: process.env.ANALYTICS_PROJECT_ID,
  storageBucket: process.env.ANALYTICS_STORAGE_BUCKET,
  messagingSenderId: process.env.ANALYTICS_MESSAGING_SENDER,
  appId: process.env.ANALYTICS_APP_ID,
  measurementId: process.env.ANALYTICS_MESURMENT_ID
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

Vue.config.productionTip = false;
Vue.prototype.$analytics = firebase.analytics();


Vue.config.productionTip = false;

Vue.use(VueMeta);
new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
