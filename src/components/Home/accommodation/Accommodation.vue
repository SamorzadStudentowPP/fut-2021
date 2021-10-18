<template>
  <div id="accommodation">
    <v-container fluid>
      <component-title class="mb-10 mt-10" text="Zakwaterowanie"/>
      <polaroid-section
          :polaroid_text="sections[0].polaroid_text"
          :reversed="sections[0].reversed"
          :src="sections[0].src"
          :text="sections[0].text"
      />
    </v-container>
  </div>
</template>

<script>
import ComponentTitle from '@/components/shared/ComponentTitle';
import PolaroidSection from '@/components/shared/PolaroidSection';

export default {
  name: 'Accommodation',
  components: {ComponentTitle, PolaroidSection},
  data() {
    return {
      sections: [
        {
          text:
              'Uczestnicy zostaną zakwaterowani w 4-gwiazdkowym Hotelu Mercure Poznań Centrum, który znajduje się przy rondzie Kaponiera, w bliskiej odległości od dworca PKP Poznań Główny.<br> ' +
              'Hotel dysponuje przestronnymi, klimatyzowanymi pokojami z bezpłatnym dostępem do internetu, fitnessem i sauną oraz dużym parkingiem. <br><br>' +
              'Hotel Mercure Poznań Centrum - ul. Roosevelta 20<br>' +
              '60-829 Poznań, tel.: 61 855 80 00',
          src: 'accomodation/mercure.jpg',
          polaroid_text: 'Hotel Mercure, Poznań Centrum',
          reversed: false,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
