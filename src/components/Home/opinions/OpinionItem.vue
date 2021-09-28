<template>
  <v-row justify="center">
    <v-col class="d-flex justify-center text-center align-center" cols="4">
      <v-img
          id="opinion_avatar"
          :aspect-ratio="1 / 1"
          :src="require(`@/assets/opinions/${src}`)"
          class="justify-center"
          max-width="250"
          min-width="250"
      />
    </v-col>
    <v-col
        class="d-flex justify-center text-center align-center flex-column"
        cols="6"
    >
      <blockquote class="blockquote text-h5 black--text">
        {{ quote }}
      </blockquote>
      <p class="text-right align-baseline grey--text">{{ name }}</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'OpinionItem',
  props: {
    src: String,
    quote: String,
    name: String,
  },
};
</script>

<style scoped>
#opinion_avatar {
  border-radius: 50%;
}
</style>
