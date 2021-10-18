<template>
  <v-col class="text-center" cols="12" lg="4" md="12" sm="12" xl="4">
    <h2
        inset
        class="text-md-h5 text-lg-h5 text-xl-h5 text-sm-h5 text-h5 font-weight-bold mt-7"
        v-html="title"
    >
      {{ title }}
    </h2>
  <div style="width: 90%">
      <v-divider class="ms-10 mt-2 mb-5"></v-divider>
    </div>
    <p
        class="text-h6 text-subtitle-1 headline text-center text-wrap"
        v-html="content"
    >
      {{content}}
    </p>

  </v-col>
</template>

<script>
export default {
  name: 'TrainingItem',
  components: {},
  props: {
    title: String,
    content: String
  },
};
</script>

<style scoped></style>
