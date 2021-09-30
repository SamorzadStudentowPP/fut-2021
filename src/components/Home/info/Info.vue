<template>
  <div id="info" class="mt-4 mb-11">
    <v-container fluid>
      <component-title :text="info_title" class="mb-3"/>
      <component-text :text="info_text"/>
      <v-row align="center" justify="center">
        <icon-section
            :icon="card1.icon"
            :text="card1.text"
            :title="card1.title"
        />
        <icon-section
            :icon="card2.icon"
            :text="card2.text"
            :title="card2.title"
        />
        <icon-section
            :icon="card3.icon"
            :text="card3.text"
            :title="card3.title"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ComponentTitle from '@/components/shared/ComponentTitle';
import ComponentText from '@/components/shared/ComponentText';
import IconSection from '@/components/shared/IconSection';

export default {
  components: {ComponentText, ComponentTitle, IconSection},
  name: 'Info',
  data() {
    return {
      info_title: 'Spotkajmy się w sercu wielkopolski!',
      info_text:
          'Koleżanki i Koledzy! Jest nam niezmiernie miło zaprosić Was do uczestnictwa w zjeździe Forum Uczelni Technicznych,' +
          'który odbędzie się od 21 do 24 października 2021 r. w urokliwym, słynącym ze świętomarcińskich rogali oraz trykających się koziołków mieście, w Poznaniu.',
      card1: {
        title: 'Mertoryczne szkolenia',
        text:
            'W trakcie zjazdu będziesz miał okazję wymienić się doświadczeniami z samorządowcami z całej Polski.',
        icon: 'icon_presentation.png'
      },
      card2: {
        title: 'Pełni pasji ludzie',
        text:
            'Spędź zjazd ze wspaniałymi ludźmi ze środowiska uczelni technicznych.',
        icon: 'icon_people.png'
      },
      card3: {
        title: 'Poznań miasto doznań',
        text:
            'Poznaj miasto, będące tętniącym sercem wielkopolski.',
        icon: 'icon_city.png'
      }
    };
  },
};
</script>

<style scoped></style>
