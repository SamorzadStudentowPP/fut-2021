<template>
  <div id="crew">
    <v-container class="mb-10" fluid>
      <component-title text="Kadra"/>
      <v-row align="start" class="mt-10" justify="center" no-gutters>
        <v-col cols="12" lg="10" md="10">
          <v-row align="start" class="mt-10" justify="center" no-gutters>
            <v-col
                v-for="(item, index) in crew"
                :key="index"
                cols="6"
                lg="2"
                md="3"
                sm="4"
            >
              <crew-card
                  :avatar="item.avatar"
                  :faculty="item.faculty"
                  :name="item.name"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CrewCard from './CrewCard';
import ComponentTitle from '@/components/shared/ComponentTitle';

export default {
  name: 'Crew',
  components: {ComponentTitle, CrewCard},
  data() {
    return {
      crew: [
        {
          name: 'Natalia Fedko',
          faculty: 'WA',
          avatar: 'Natalka.jpg',
        },
        {
          name: 'Hubert Ziętowski',
          faculty: 'WARiE',
          avatar: 'Hipis.jpg',
        },
        {
          name: 'Laura Strojna',
          faculty: 'WARiE',
          avatar: 'Laura.jpg',
        },
        {
          name: 'Szymon Bujanowski',
          faculty: 'WARiE',
          avatar: 'Bujanowski.jpg',
        },
        {
          name: 'Witold Rozumek',
          faculty: 'WARiE',
          avatar: 'Wiciu.jpg',
        },
        {
          name: 'Bartosz Cieślewicz',
          faculty: 'WIiT',
          avatar: 'Bartek_C.jpg',
        },
        {
          name: 'Kornelia Kostrzewska',
          faculty: 'WIiT',
          avatar: 'Kornelia.jpg',
        },
        {
          name: 'Martyna Kurz',
          faculty: 'WIiT',
          avatar: 'Kurz.jpg',
        },
        {
          name: 'Bartosz Kruczyński',
          faculty: 'WILiT',
          avatar: 'Bartosz_K.jpg',
        },
        {
          name: 'Daria Wstawska',
          faculty: 'WILiT',
          avatar: 'Wstawska.jpg',
        },
        {
          name: 'Katarzyna Chmielewska',
          faculty: 'WILiT',
          avatar: 'Chmielewska.jpg',
        },
        {
          name: 'Mikołaj Gemzicki',
          faculty: 'WILiT',
          avatar: 'Gemzicki.jpg',
        },
        {
          name: 'Ula Sadowska',
          faculty: 'WILiT',
          avatar: 'Ula.jpg',
        },
        {
          name: 'Aleksandra Stróżyk',
          faculty: 'WIM',
          avatar: 'Olcia.jpg',
        },
        {
          name: 'Magdalena Kubiak',
          faculty: 'WIM',
          avatar: 'Magda_K.jpg',
        },
        {
          name: 'Magdalena Wojtczak',
          faculty: 'WIM',
          avatar: 'Magda_W.jpg',
        },
        {
          name: 'Martyna Maćkowiak',
          faculty: 'WIM',
          avatar: 'Martynka.jpg',
        },
        {
          name: 'Paweł Dzięcioł',
          faculty: 'WIM',
          avatar: 'Dzieciol.jpg',
        },
        {
          name: 'Patryk Ginter',
          faculty: 'WIMiFT',
          avatar: 'Ginter.jpg',
        },
        {
          name: 'Marcin Sylka',
          faculty: 'WIMiFT',
          avatar: 'Rychu.jpg',
        },
        {
          name: 'Wojciech Gindera',
          faculty: 'WIŚiE',
          avatar: 'Gindera.jpg',
        },
        {
          name: 'Dagmara Maćkowiak',
          faculty: 'WIZ',
          avatar: 'Mackowiak.jpg',
        },
        {
          name: 'Maria Zienkiewicz',
          faculty: 'WIZ',
          avatar: 'Maria.jpg',
        },
        {
          name: 'Karolina Ławniczak',
          faculty: 'WIZ',
          avatar: 'Karolina.jpg',
        },
        {
          name: 'Marta Kocurek',
          faculty: 'WTCh',
          avatar: 'Marta.jpg',
        },
        {
          name: 'Weronika Frankiewicz',
          faculty: 'WTCh',
          avatar: 'Werka.jpg',
        },
        {
          name: 'Wiktoria Stachowicz',
          faculty: 'WTCh',
          avatar: 'Wiktoria.jpg',
        },
      ],
    };
  },
};
</script>

<style scoped></style>
