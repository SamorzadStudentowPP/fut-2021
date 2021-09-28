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
          title: 'Czwartek',
          dayAgenda: [
            {
              time: '8.00 - 10.00',
              name: 'Śniadanie',
            },
            {
              time: '14.00 - 16.00',
              name: 'Obiad',
            },
            {
              time: '21.00 - 23.00',
              name: 'Kolacja',
            },
          ],
        },
        {
          title: 'Piątek',
          dayAgenda: [
            {
              time: '8.00 - 10.00',
              name: 'Śniadanie',
            },
            {
              time: '10.00 - 20.00',
              name: 'Lorem ipsum dolor sit amet',
            },
          ],
        },
        {
          title: 'Sobota',
          dayAgenda: [
            {
              time: '8.00 - 10.00',
              name: 'Śniadanie',
            },
          ],
        },
        {
          title: 'Niedziela',
          dayAgenda: [
            {
              time: '8.00 - 10.00',
              name: 'Śniadanie',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped></style>
