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
              'Zakwaterowani będziecie w czteroosobowych domkach w Karpicku, niedaleko Jeziora Wolsztyńskiego, nad którym również przygotowane są atrakcje. Dla tych, którzy kochają naturę znajdą się miejsca na rozłożenie kocyka na trawie. Natomiast Ci którzy cenią sobie wygodne miejsce do integracji z nowopoznanymi znajomymi, mogą zrelaksować się w strefie chillu.',
          src: 'karpicko_2019_sm.jpg',
          polaroid_text: 'Karpicko 2019',
          reversed: false,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
