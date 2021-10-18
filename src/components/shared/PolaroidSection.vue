<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="11" lg="8" md="9">
        <v-row align="center" justify="center">
          <v-col
              :offset-lg="reversed ? 1 : 0"
              :order="reversed ? 'first' : ''"
              :order-md="reversed ? 'last' : ''"
              class="align-content-center"
              cols="12"
              lg="6"
              md="6"
              sm="10"
              xl="6"
          >
            <h1
                class="text-h5 font-weight-regular headline text-center text-wrap "
                v-html="text"
            >
              {{ text }}
            </h1>
          </v-col>
          <v-col
              :offset-lg="reversed ? 0 : 1"
              cols="12"
              lg="5"
              md="6"
              sm="7"
              xl="4"
          >
            <polaroid-image :description="polaroid_text" :src="src"/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PolaroidImage from '@/components/shared/PolaroidImage';

export default {
  name: 'PoloaridSection',
  components: {PolaroidImage},
  props: {
    text: String,
    src: String,
    polaroid_text: String,
    reversed: {type: Boolean, default: false},
  },
};
</script>

<style scoped></style>
