<template>
  <v-app>
    <navbar/>
    <v-main>
      <router-view/>
    </v-main>
    <custom-footer/>
  </v-app>
</template>

<style></style>
<script>
import Navbar from '@/components/Navbar';
import CustomFooter from './components/CustomFooter.vue';
// import {firebase} from '@firebase/app';
// import {version} from '../package.json';
// import {isPWA} from '@/utils';

export default {
  components: {CustomFooter, Navbar},
  // metaInfo: {
  //   changed(metaInfo) {
  //     firebase.analytics().setCurrentScreen(metaInfo.title);
  //     firebase.analytics().logEvent('page_view');
  //     firebase.analytics().logEvent('screen_view', {
  //       app_name: isPWA() ? 'pwa' : 'web',
  //       screen_name: metaInfo.title,
  //       app_version: version
  //     });
  //   }
  // },
  // mounted() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       this.$analytics.setUserId(user.uid);
  //       this.$analytics.setUserProperties({
  //         account_type: 'Basic' // can help you to define audiences
  //       });
  //     }
  //   });
  // }
};
</script>
