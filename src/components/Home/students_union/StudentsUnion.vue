<template>
  <div id="studentsUnion">
    <v-container fluid>
      <component-title class="mb-10 mt-5" text="O Samorządzie Studentów Politechniki Poznańskiej"/>
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
  name: 'StudentsUnion',
  components: {ComponentTitle, PolaroidSection},
  data() {
    return {
      sections: [
        {
          text:
              'Samorząd Studentów Politechniki Poznańskiej w obecnej strukturze funkcjonuje już od półtorej roku.' +
              ' W ramach całej Uczelnianej Rady Samorządu Studentów działa ponad 100 studentów, podzielonych na 5 komisji programowych.' +
              ' Dodatkowo pieczę nad działaniem Samorządu sprawuje Zarząd wraz z Konwentem Przewodniczących oraz Komisją Rewizyjną.',
          src: 'students_union/sspp.jpg',
          polaroid_text: '',
          reversed: true,
        },
        {
          text:
              'Samorząd co roku organizuje wiele niesamowitych akcji poruszających środowisko studenckie, jak Polibuda Open Air, jednocześnie dbając o jakość kształcenia, w ramach działań takich jak Akcja Ankietyzacja, w ramach której zwiększyło poziom ankietyzacji wśród studentów do ponad 65%.' +
              'Jednak działanie w ramach uczelni to nie wyszystko. Od kilkunastu lat Samorząd organizuje sztab WOŚP przy Politechice Poznańskiej, będącym jednym z największych sztabów WOŚP w Polsce.',
          src: 'students_union/samorzad.jpg',
          polaroid_text: '',
          reversed: false,
        },
      ],

    };
  },
};
</script>

<style scoped></style>
