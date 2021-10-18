<template>
  <div id="agenda">
    <v-container fluid>
      <component-title text="Harmonogram"/>
      <v-row align="center" justify="center">
        <v-col H cols="11" md="10">
          <v-timeline
              :dense="$vuetify.breakpoint.smAndDown"
              align-top
              class="mt-5"
          >
            <v-timeline-item
                v-for="(day, index) in days"
                :key="index"
                color="primary"
                fill-dot
            >
              <agenda-item :day-agenda="day.dayAgenda" :title="day.title"/>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AgendaItem from './AgendaItem';
import ComponentTitle from '@/components/shared/ComponentTitle';

export default {
  name: 'Agenda',
  components: {ComponentTitle, AgendaItem},
  data() {
    return {
      days: [
        {
          title: 'Czwartek - 21.10.',
          dayAgenda: [
            {
              time: '12.00 - 18.00',
              name: 'Kwaterowanie uczestników części rozszerzonej',
            },
            {
              time: '14.00 - 18.00',
              name: 'OpenPoznań - czyli atrakcje na terenie Poznania',
            },
            {
              time: '18.00 - 20.00',
              name: 'Zakończenie zakwaterowania i czas na przebranie się',
            },
            {
              time: '20.00 - 20.30',
              name: 'Przejazd na kolację',
            },
            {
              time: '20.30 - 21.30',
              name: 'Kolacja dla uczestników części rozszerzonej',
            },
            {
              time: '21.30 - 22.00',
              name: 'Przejazd na integrację',
            },
            {
              time: '22.00 - 24.00',
              name: 'Integracja części rozszerzonej',
            },
          ],
        },
        {
          title: 'Piątek - 22.10.',
          dayAgenda: [
            {
              time: '6.30 - 9.30',
              name: 'Śniadanie',
            },
            {
              time: '9.30 - 17.00',
              name: 'Kwaterowanie uczestników części podstawowej',
            },
            {
              time: '9.30 - 10.00',
              name: 'Przejazd uczestników na atrakcje',
            },
            {
              time: '10.00 - 14.30',
              name: 'Atrakcje dla uczestników części rozszerzonej',
            },
            {
              time: '14.30 - 15.00',
              name: 'Przejazd uczestników części rozszerzonej do Hotelu',
            },
            {
              time: '15.00 - 15.30',
              name: 'Czas wolny w Hotelu',
            },
            {
              time: '15.30 - 16.00',
              name: 'Przejazd uczestników części rozszerzonej na obiad',
            },
            {
              time: '16.00 - 17.00',
              name: 'Obiad dla uczestników części rozszerzonej',
            },
            {
              time: '17.00 - 17.30',
              name: 'Przejście na Otwarcie Zjazdu Forum Uczelni Technicznych',
            },
            {
              time: '17.30 - 19.00',
              name: 'Otwarcie Zjazdu Forum Uczelni Technicznych',
            },
            {
              time: '19.00 - 19.30',
              name: 'Przejazd do Hotelu',
            },
            {
              time: '19.30 - 20.00',
              name: 'Czas wolny w Hotelu',
            },
            {
              time: '20.00 - 20.30',
              name: 'Przejazd na kolację',
            },
            {
              time: '20.30 - 21.30',
              name: 'Kolacja',
            },
            {
              time: '21.30 - 22.00',
              name: 'Przejazd na wieczorną część integracyjną',
            },
            {
              time: '22.00 - 24.00',
              name: 'Wieczorna integracja',
            },
          ],
        },
        {
          title: 'Sobota - 21.10.',
          dayAgenda: [
            {
              time: '6.30 - 9.30',
              name: 'Śniadanie',
            },
            {
              time: '9.30 - 10.00',
              name: 'Przejazd na szkolenia',
            },
            {
              time: '10.00 - 13.45',
              name: 'Rada Starszych',
            },
            {
              time: '10.00 - 11.45',
              name: 'Blok szkoleniowy część I',
            },
            {
              time: '11.45 - 12.00',
              name: 'Przerwa kawowa',
            },
            {
              time: '12.00 - 13.45',
              name: 'Blok szkoleniowy część II',
            },
            {
              time: '13.50 - 14.50',
              name: 'Obiad',
            },
            {
              time: '15.00 - 18.00',
              name: 'Sesja Robocza Forum Uczelni Technicznych',
            },
            {
              time: '18.00 - 18.15',
              name: 'Przejazd do Hotelu',
            },
            {
              time: '18.15 - 19.15',
              name: 'Czas wolny w Hotelu',
            },
            {
              time: '19.15 - 19.30',
              name: 'Przejazd na Galę Środowiska Studenckiego i Bal',
            },
            {
              time: '19.30 - 02.00',
              name: 'Gala Środowiskowa oraz Bal',
            },
          ],
        },
        {
          title: 'Niedziela - 24.10.',
          dayAgenda: [
            {
              time: '6.30 - 9.30',
              name: 'Śniadanie',
            },
            {
              time: '9.30 - 13.00',
              name: 'Wykwaterowanie',

            }
          ],
        },
      ],
    };
  },
};
</script>

<style scoped></style>
