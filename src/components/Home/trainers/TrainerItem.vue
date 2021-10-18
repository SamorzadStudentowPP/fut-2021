<template>
  <v-col class="text-center" cols="12" lg="4" md="12" sm="12" xl="4">
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
    </v-card>
    <div style="width: 90%">
      <v-divider class="ms-10 mt-2 mb-5"></v-divider>
    </div>
    <p
        class="text-h6 text-subtitle-1 headline text-center text-wrap"
        v-html="content"
    >
<!--      {{ content }}-->
    </p>

  </v-col>
</template>

<script>
export default {
  name: 'TrainerItem',
  components: {},
  props: {
    avatar: String,
    name: String,
    content: String
  },
};
</script>

<style scoped></style>
