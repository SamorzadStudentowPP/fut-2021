<template>
  <div class="home">
    <home-hero />
    <invitation />
    <info />
    <registration />
    <about />
    <accommodation />
    <opinions />
    <contact />
    <partners />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHero from '@/components/Home/HomeHero';
import Invitation from '@/components/Home/invitation/Invitation';
import Registration from '@/components/Home/registration/Registration';
import Accommodation from '@/components/Home/accommodation/Accommodation';
import Contact from '@/components/Home/contact/Contact';
import About from '@/components/Home/about/About';
import Partners from '@/components/Home/partners/Partners';
import Info from '@/components/Home/info/Info.vue';
import Opinions from '@/components/Home/opinions/Opinions.vue';

export default {
  name: 'Home',
  components: {
    Partners,
    Contact,
    About,
    Accommodation,
    Registration,
    Invitation,
    HomeHero,
    Opinions,
    Info,
  },
  metaInfo() {
    return {
      title:
        'Zjazd FUT 2021 na Politechnice Poznańskiej',
    };
  },
};
</script>
