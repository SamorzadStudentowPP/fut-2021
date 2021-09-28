<template>
  <div id="partners">
    <v-container class="mb-10" fluid>
      <component-title class=" mt-10" text="Patroni honorowi"/>
      <v-row align="start" class="mt-10" justify="center" no-gutters>
        <v-col cols="12" lg="10" md="10">
          <v-row align="start" class="mt-10" justify="center" no-gutters>
            <v-col
                v-for="(item, index) in honoredList"
                :key="index"
                cols="10"
                lg="3"
                md="4"
                sm="5"
            >
              <organizer-card :src="item.src"/>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <component-title class=" mt-10" text="Partnerzy"/>
      <v-row align="start" class="mt-10" justify="center" no-gutters>
        <v-col cols="12" lg="10" md="10">
          <v-row align="start" class="mt-10" justify="center" no-gutters>
            <v-col
                v-for="(item, index) in partnerList"
                :key="index"
                cols="6"
                lg="2"
                md="3"
                sm="4"
            >
              <partner-card :src="item.src"/>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import OrganizerCard from '@/components/Home/partners/OrganizerCard';
import ComponentTitle from '@/components/shared/ComponentTitle';
import PartnerCard from '@/components/Home/partners/PartnerCard';

export default {
  name: 'Partners',
  components: {PartnerCard, ComponentTitle, OrganizerCard},
  data() {
    return {
      honoredList: [
        {
          src: 'pp.png',
        },
        {
          src: 'logo_sspp_black_narrow.png',
        },
      ],
      partnerList: [
        {
          src: 'pils.png',
        },
        {
          src: 'fajowo.png',
        },
        {
          src: 'fortuna.jpg',
        },
        {
          src: 'kontakt_cjo.png',
        },
      ],
    };
  },
};
</script>

<style scoped></style>
