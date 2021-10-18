<template>
  <v-card class="elevation-0 transparent justify-center text-center ms-10">
    <v-card-text class="text-xs-center hidden-xs-only">
      <img :src="require(`@/assets/partners/${src}`)" :height="isExtraSmall ? 150 : isExtraExtraSmall ? 40 : 200"/>
    </v-card-text>
    <v-card-text class="text-xs-center hidden-sm-and-up">
      <img :src="require(`@/assets/partners/${src}`)" :height="isExtraSmall ? 100 : isExtraExtraSmall ? 40 : 150"/>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'OrganizerCard',
  props: {
    src: String,
    isExtraSmall: {
      type: Boolean,
      default: false
    },
    isExtraExtraSmall: {
      type: Boolean,
      default: false
    }
  },
};
</script>

<style scoped></style>
