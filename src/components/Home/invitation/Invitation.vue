<template>
  <div id="invitation">
    <v-container class="mb-5" fluid>
      <component-title :text="invitation_title" class="mb-5 mt-5"/>
      <component-text :text="invitation_text"/>
      <v-row align="start" class="mt-10" justify="center">
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
import IconSection from '@/components/shared/IconSection.vue';

export default {
  name: 'Invitation',
  components: {ComponentText, ComponentTitle, IconSection},
  data() {
    return {
      invitation_title: 'Obóz Integracyjno-Szkoleniowy "Karpicko"',
      invitation_text:
          'Jest to obóz adaptacyjny Politechniki Poznańskiej, który w najlepszy sposób przygotuje Was do wejścia w nowy etap życia - studia. ' +
          'Wszystko zorganizowane jest przez studentów dla studentów - czyli przez Samorząd Studentów Politechniki Poznańskiej dla nowych studentów.',
      card1: {
        title: 'Mertoryczne szkolenia',
        text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ' +
            'facilisis, ipsum in suscipit ultricies, leo ligula laoreet mi, sit amet ' +
            'mollis massa justo eget sapien. Phasellus quis consequat justo. Nulla ' +
            'elementum mattis dapibus.',
        icon: 'icon_presentation.png'
      },
      card2: {
        title: 'Pełni pasji ludzie',
        text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ' +
            'facilisis, ipsum in suscipit ultricies, leo ligula laoreet mi.',
        icon: 'icon_people.png'
      },
      card3: {
        title: 'Poznań miasto doznań',
        text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ' +
            'facilisis, ipsum in suscipit ultricies, leo ligula laoreet mi, sit amet ' +
            'mollis massa justo eget sapien. Phasellus quis consequat justo. Nulla ',
        icon: 'icon_city.png'
      }
    };
  },
};
</script>

<style scoped></style>
