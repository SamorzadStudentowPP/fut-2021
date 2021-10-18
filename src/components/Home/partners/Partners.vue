<template>
  <div id="partners">
    <v-container class="mb-12" fluid>
      <component-title class=" mt-3" text="Organizatorzy"/>
      <v-row align="start" class="mt-2" justify="center" no-gutters>
        <v-col cols="12" lg="10" md="10">
          <v-row align="start" class="mt-10" justify="center" no-gutters>
            <v-col
                v-for="(item, index) in organisers"
                :key="index"
                cols="12"
                lg="4"
                md="6"
                sm="12"
            >
              <organizer-card :src="item.src"/>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <component-title class=" mt-3" text="Patroni honorowi"/>
      <v-row align="start" class="mt-2" justify="center" no-gutters>
        <v-col cols="12" lg="10" md="10">
          <v-row align="start" class="mt-10" justify="center" no-gutters>
            <v-col
                v-for="(item, index) in honoredList"
                :key="index"
                cols="12"
                lg="4"
                md="6"
                sm="12"
            >
              <organizer-card :src="item.src"/>
            </v-col>
            <v-col
                cols="12"
                lg="12"
                md="12"
                sm="12"
            >
              <organizer-card :src="'wojewodztwo.jpg'" :is-extra-small="true"/>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <component-title class=" mt-3 ml-5" text="Sponsorzy" />
      <v-row align="start" class="mt-2" justify="center" no-gutters>
        <v-col cols="12" lg="10" md="10">
          <v-row align="start" class="mt-10" justify="center" no-gutters>
            <v-col
                cols="9"
                lg="9"
                md="9"
                sm="9"
            >
              <organizer-card :src="'sms_api.png'" :is-extra-extra-small="true"/>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!--      <component-title class=" mt-10" text="Partnerzy"/>-->
<!--      <v-row align="start" class="mt-10" justify="center" no-gutters>-->
<!--        <v-col cols="12" lg="10" md="10">-->
<!--          <v-row align="start" class="mt-10" justify="center" no-gutters>-->
<!--            <v-col-->
<!--                v-for="(item, index) in partnerList"-->
<!--                :key="index"-->
<!--                cols="6"-->
<!--                lg="2"-->
<!--                md="3"-->
<!--                sm="4"-->
<!--            >-->
<!--              <partner-card :src="item.src"/>-->
<!--            </v-col>-->
<!--          </v-row>-->
<!--        </v-col>-->
<!--      </v-row>-->
    </v-container>
  </div>
</template>

<script>
import OrganizerCard from '@/components/Home/partners/OrganizerCard';
import ComponentTitle from '@/components/shared/ComponentTitle';

export default {
  name: 'Partners',
  components: {
    // PartnerCard,
    ComponentTitle, OrganizerCard},
  data() {
    return {
      organisers: [
        {
          src: 'logo_sspp_black_narrow.png',
        },
        {
          src: 'fundacja_pp.jpg'
        }
      ],
      honoredList: [
        {
          src: 'pp.png',
        },
        {
          src: 'poznan.jpg',
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
