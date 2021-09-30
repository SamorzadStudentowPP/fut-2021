<template>
  <div id="university">
    <v-container fluid>
      <component-title class="mb-10 mt-5" text="O Politechnice Poznańskiej"/>
      <polaroid-section
          v-for="(item, index) in sections" :key="index"
          :polaroid_text="item.polaroid_text"
          :reversed="item.reversed"
          :src="item.src"
          :text="item.text"
      />
    </v-container>
  </div>
</template>

<script>
import ComponentTitle from '@/components/shared/ComponentTitle';
import PolaroidSection from '../../shared/PolaroidSection.vue';

export default {
  name: 'University',
  components: {ComponentTitle, PolaroidSection},
  data() {
    return {
      sections: [
        {
          text:
              'Politechnika Poznnańska to jedna z najlepszych uczelni technicznych w kraju oraz lider uniwersytetu europejskiego EUNICE.' +
              'Prowadzi kształcenie na 9 wydziałach i ponad 30 kierunkach, również w języku angielskim, na których uczęszcza ponad 16 000 studentów studiów I i II stopnia, studiów doktoranckich oraz podyplomowych.',
          src: 'university/wtch.jpg',
          polaroid_text: 'Budynek Wydziału Technologii Chemicznej PP',
          reversed: false,
        },
        {
          text:
              'Uczelnia poprzez realizacje swojej misji zapewnia zarówno jakość kształcenia, jak i przeprowadzenie prac naukowych oraz badawczo-rozwojowych na najwyższym, europejskim poziomie..',
          src: 'university/pp.jpg',
          polaroid_text: 'Centrum wykładowe Politechniki Poznańskiej',
          reversed: true,
        },

      ],
    };
  },
};
</script>

<style scoped></style>
