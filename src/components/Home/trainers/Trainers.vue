<template>
  <div class="mt-10">
    <v-parallax
        dark
        height="350"
        src="@/assets/university/polanka.jpg"
    >
    </v-parallax>
    <v-container fluid >
      <component-title text="Panele szkoleniowe" id="trainings"></component-title>
      <v-row align="center" justify="center">
        <v-col H cols="11" md="10">
          <v-row justify="center">
            <training-item
                v-for="(item, index) in trainings"
                :key="index"
                :title="item.title"
                :content="item.content"
            ></training-item>
          </v-row>
        </v-col>
      </v-row>
      <component-title text="Szkoleniowcy" id="trainers"></component-title>
      <v-row align="center" justify="center">
        <v-col H cols="11" md="10">
          <v-row justify="center">
            <trainer-item
                v-for="(item, index) in trainers"
                :key="index"
                :avatar="item.avatar"
                :name="item.name"
                :content="item.content"
            ></trainer-item>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ComponentTitle from '@/components/shared/ComponentTitle';
import TrainingItem from '@/components/Home/trainers/TrainingItem';
import TrainerItem from '@/components/Home/trainers/TrainerItem';

export default {
  name: 'Trainers',
  components: {TrainerItem, TrainingItem, ComponentTitle},
  data() {
    return {
      trainings: [
        {
          title: 'Budowanie wizerunku <br> i marki samorządu',
          content: 'Podczas szkolenia dowiesz się czym jest marka i wizerunek organizacji, a także jak można je budować, tak, by osiągnąć zamierzone cele komunikacyjne. Jak zaplanować strategię wizerunkową? W jaki sposób docierać do odbiorców? Na te pytania odpowiemy sobie podczas spotkania. Przeanalizujemy również najczęstsze błędy i stworzymy wizerunkowe kompendium, które przyda się każdemu samorządowcowi! \n' +
              '<br/>Prowadzący: Jakub Persjanow'
        },
        {
          title: 'Badanie oczekiwań studentów wobec programu studiów',
          content: 'Szkolenie ma na celu przekazanie wiedzy z zakresu sposobów, dzięki którym samorząd studencki może badać oczekiwania studentów wobec programu studiów, a które nie skupiają się tylko na ankietach. Jest to szczególnie ważne w kontekście opiniowania programów studiów i wprowadzania zmian w programach.\n' +
              '<br/>Prowadząca: Joanna Maruszczak'
        },
        {
          title: 'Organizacja wydarzeń stacjonarnych i imprez masowych',
          content: 'Szkolenie będzie dotyczyć organizacji imprez masowych w ujęciu prawnym oraz praktycznych aspektów organizacji wydarzeń stacjonarnych z naciskiem na kwestie bezpieczeństwa.\n' +
              '<br/>Prowadząca: Iga Adamek'
        },
      ],
      trainers: [
        {
          avatar: 'persjanow.jpg',
          name: 'Jakub Persjanow',
          content: 'Student II stopnia kierunku Fizyka Techniczna, specjalności Informatyka Stosowana, Politechniki Gdańskiej. Obecnie Dyrektor Centrum Komunikacji Parlamentu Studentów RP, Zastępca Przewodniczącego Samorządu Studentów Politechniki Gdańskiej, członek Parlamentu Studentów oraz senator Politechniki Gdańskiej. W samorządności działa od 4 latach. Swoje działania ukierunkowuje na komunikację, od budowania wizerunku, przez media społecznościowe na grafikach kończąc. Facebook i Instagram nie ma przed nim żadnych tajemnic!'
        },
        {
          avatar: 'maru.jpg',
          name: 'Joanna Maruszczak',
          content: 'Studentka kognitywistyki na studiach II stopnia na Uniwersytecie im. Adama ' +
              'Mickiewicza w Poznaniu. Obecnie członkini Rady Wykonawczej Parlamentu ' +
              'Studentów RP, kierująca pracami Komisji ds. jakości kształcenia i ' +
              'umiędzynarodowienia. Reprezentantka PSRP w European Students’ Union (ESU) ' +
              'oraz w Radzie Narodowej Agencji Wymiany Akademickiej (NAWA).<br> W latach ' +
              '2019-2020 przewodnicząca Samorządu Studentów Uniwersytetu im. Adama ' +
              'Mickiewicza w Poznaniu. Od października 2019 roku ekspertka ds. studenckich ' +
              'Polskiej Komisji Akredytacyjnej.'
        },
        {
          avatar: 'Iga.jpeg',
          name: 'Iga Adamek',
          content: 'Studentka studiów magisterskich na Wydziale Chemicznym Politechniki Gdańskiej. Samorządowiec z ponad czteroletnim doświadczeniem, od trzech lat członkini Zarządu Samorządu Studentów Politechniki Gdańskiej.<br>' +
              'Projektowiec z powołania i zamiłowania, ma na swoim koncie organizację kilkudziesięciu projektów i imprez: od spotkań na planszówki po juwenalia. Specjalistka w dziedzinie imprez masowych i wydarzeń kulturalnych. Kierowała grupami projektowymi na każdym poziomie doświadczenia.<br> Obecnie Członkini Rady Wykonawczej PSRP oraz Przewodnicząca Komisji ds. projektów.'
        },



      ]
    };
  },
};
</script>

<style scoped></style>
