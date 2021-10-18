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
              'Samorząd Studentów Politechniki Poznańskiej w obecnej strukturze funkcjonuje już drugą kadencje.<br/> ' +
              'W ramach całej Uczelnianej Rady Samorządu Studentów działa ponad 100 studentów, gdzie każdy przynależy do jednej z dziewięciu Wydziałowych Rad Samorządu Studentów. Ponadto Uczelniana Rada Samorządu Studentów podzielona jest na 5 komisji programowych.<br>' +
              ' Nad całą tą strukturą pieczę sprawuje Zarząd wraz z Konwentem Przewodniczących oraz Komisją Rewizyjną.',
          src: 'students_union/sspp.jpg',
          polaroid_text: '',
          reversed: true,
        },
        {
          text:
              'Samorząd co roku organizuje wiele niesamowitych akcji poruszających środowisko studenckie, takich jak Polibuda Open Air (jedne z trzech największych juwenaliów w Poznaniu). Jednocześnie SSPP dba o jakość kształcenia, w ramach działań takich jak Akcja Ankietyzacja, która zwiększyła poziom ankietyzacji wśród studentów do ponad 60%. ' +
              'Dodatkowo organizuje obóz adaptacyjny dla ponad 120 osób. ' +
              'Jednak działanie w ramach uczelni to nie wszystko. Od kilkunastu lat Samorząd organizuje sztab WOŚP przy Politechnice Poznańskiej, będący jednym z największych sztabów WOŚP w Polsce i największym w Polsce zachodniej.',
          src: 'students_union/samorzad.jpg',
          polaroid_text: '‎',
          reversed: false,
        },
      ],

    };
  },
};
</script>

<style scoped></style>
