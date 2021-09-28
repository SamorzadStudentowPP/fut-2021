<template>
  <div id="studentsUnion">
    <v-container fluid>
      <component-title class="mb-10 mt-5" text="O SSPP"/>
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
import PolaroidSection from '../../shared/PolaroidSection.vue';

export default {
  name: 'StudentsUnion',
  components: {ComponentTitle, PolaroidSection},
  data() {
    return {
      sections: [
        {
          text:
              'Damy Wam okazję do rozpoczęcia swojej przygody ze studiami w najlepszej możliwej formie. Rozmaite atrakcje i aktywności, niezapomniane przeżycia oraz przede wszystkim zabawa do białego rana – a to nie wszystko co dla Was przygotowaliśmy.',
          src: 'university/wtch.jpg',
          polaroid_text: 'Karpicko 2019',
          reversed: false,
        },
        {
          text:
              'Nie zdradzimy Wam na razie szczegółów, ale nie martwcie się! Organizujemy obóz już od wielu lat, więc wiemy, co robimy. Będziecie również mieli okazję skorzystać ze szkoleń, które okażą się bardzo przydatne na początku studiów.',
          src: 'university/wtch.jpg',
          polaroid_text: 'Karpicko 2019',
          reversed: true,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
