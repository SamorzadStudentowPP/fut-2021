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
import { getAnalytics, logEvent, setCurrentScreen  } from 'firebase/analytics';
import {version} from '../package.json';
import {isPWA} from '@/utils';

export default {
  components: {CustomFooter, Navbar},
  metaInfo: {
    changed(metaInfo) {
      setCurrentScreen(getAnalytics(), metaInfo.title);
      logEvent(getAnalytics(), 'page_view');
      logEvent(getAnalytics(), 'screen_view', {
        app_name: isPWA() ? 'pwa' : 'web',
        screen_name: metaInfo.title,
        app_version: version
      });
    }
  }
};
</script>
