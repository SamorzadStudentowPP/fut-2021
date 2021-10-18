<template>
  <div class="home">
    <home-hero/>
    <info/>
    <registration/>
    <StudentsUnion/>
    <University/>
    <agenda/>
    <trainers/>
    <accommodation/>
    <Coordinator/>
<!--    <opinions/>-->
    <partners/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHero from '@/components/Home/HomeHero';
import Registration from '@/components/Home/registration/Registration';
import Accommodation from '@/components/Home/accommodation/Accommodation';
import StudentsUnion from '@/components/Home/students_union/StudentsUnion';
import Partners from '@/components/Home/partners/Partners';
import Info from '@/components/Home/info/Info.vue';
import Agenda from '@/components/Home/agenda/Agenda';
import University from '@/components/Home/university/University';
import Coordinator from '@/components/Home/coordinator/Coordinator';
import Trainers from '@/components/Home/trainers/Trainers';

export default {
  name: 'Home',
  components: {
    Coordinator,
    University,
    Agenda,
    Trainers,
    Partners,
    StudentsUnion,
    Accommodation,
    Registration,
    HomeHero,
    // Opinions,
    Info,
  },
  metaInfo() {
    return {
      title:
          'Zjazd FUT 2021 na Politechnice Poznańskiej - strona główna',
    };
  },
};
</script>
