<template>
  <div id="university">
    <v-container fluid>
      <component-title class="mb-10 mt-5" text="O Politechnice Poznańskiej"/>
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
  name: 'University',
  components: {ComponentTitle, PolaroidSection},
  data() {
    return {
      sections: [
        {
          text:
              'Nie zdradzimy Wam na razie szczegółów, ale nie martwcie się! Organizujemy obóz już od wielu lat, więc wiemy, co robimy. Będziecie również mieli okazję skorzystać ze szkoleń, które okażą się bardzo przydatne na początku studiów.',
          src: 'university/wtch.jpg',
          polaroid_text: 'Karpicko 2019',
          reversed: false,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
