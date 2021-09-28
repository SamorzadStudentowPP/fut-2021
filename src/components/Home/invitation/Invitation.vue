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
        title: 'Jedyna taka okazja!',
        text:
            'Czy wiesz, że na Karpicko możesz zapisać się tylko jeden raz? Na samym obozie będą tylko studenci, którzy po raz pierwszy rekrutują się na naszą politechnikę! Jest to niepowtarzalna okazja by poznać znajomości na lata!',
        icon: 'stopwatch_dark.svg',
      },
      card2: {
        title: 'Nowe znajomości',
        text:
            'Będziecie mieli możliwość poznać zarówno innych pierwszorocznych studentów, którzy tak jak Wy po raz pierwszy przekraczają mury Uczelni, ale także starszych kolegów z Samorządu Studentów, którzy wprowadzą Was w tajniki życia studenckiego. ',
        icon: 'users_dark.svg',
      },
      card3: {
        title: 'Niezapomniane chwile',
        text:
            'Chwile na Karpicku pozostaną na lata! Najlepsze wspomnienia, których z zazdrością będą wysłuchiwać osoby, które nie zdecydowały się pojechać na obóz. Sięgnij z nami po dozę wrażeń oraz nowych przyjaźni. Nie może Cię zabraknąć!\n',
        icon: 'hourglass_dark.svg',
      },
    };
  },
};
</script>

<style scoped></style>
