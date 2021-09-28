<template>
  <div>
    <v-row justify="center">
      <v-col
          class="d-flex justify-center text-center align-center"
          cols="6"
          sm="4"
      >
        <v-img
            id="opinion_avatar_sm"
            :aspect-ratio="1 / 1"
            :src="require(`@/assets/opinions/${src}`)"
            class="hidden-xs-only"
            max-width="250"
            min-width="250"
        />
        <v-img
            id="opinion_avatar_xs"
            :aspect-ratio="1 / 1"
            :src="require(`@/assets/opinions/${src}`)"
            class="hidden-sm-only"
            max-width="188"
            min-width="188"
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="8">
        <blockquote class=" black--text text-center text-subtitle-1 headline">
          {{ quote }}
        </blockquote>
        <p class="text-right align-baseline grey--text">{{ name }}</p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'OpinionItemSmAndDown',
  props: {
    src: String,
    quote: String,
    name: String,
  },
};
</script>

<style scoped>
#opinion_avatar_sm {
  border-radius: 50%;
}

#opinion_avatar_xs {
  border-radius: 50%;
}
</style>
