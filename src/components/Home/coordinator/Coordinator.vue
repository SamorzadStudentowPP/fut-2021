<template>
  <div id="coordinator">
    <v-container fluid>
      <component-title class="mb-5 mt-10" text="Koordynator"/>
      <v-card class="elevation-0 transparent">
        <v-card-text class="text-center">
          <v-avatar class="justify-center text-center " size="250">
            <img
                :src="require(`@/assets/crew/${avatar}`)"
                class="text-center justify-center"
            />
          </v-avatar>
        </v-card-text>
        <v-card-title
        class="layout justify-center text-center text-sm-h5 text-md-h5 text-lg-h5 text-xl-h5 font-weight-bold"
        primary-title
        >
          {{ name }}
        </v-card-title>
        <v-card-text class="mt-n4 text-center text-sm-body-1 text-md-body-1 text-lg-body-1 text-xl-body-1">{{ phone }}</v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import ComponentTitle from '@/components/shared/ComponentTitle';

export default {
  components: {ComponentTitle},
  name: 'Coordinator',
  data() {
    return {
      name: 'Bartosz Cieślewicz',
      phone: '+48 664 662 143',
      avatar: 'Cieslewicz.jpg',
    };
  },

};
</script>

<style scoped></style>
