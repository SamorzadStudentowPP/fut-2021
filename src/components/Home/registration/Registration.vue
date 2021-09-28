<template>
  <div id="registration">
    <v-parallax
        dark
        height="350"
        src="@/assets/university/wtch.jpg"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12" lg="4" md="5" sm="7" xl="3">
          <v-btn
              :href="link"
              class="font-weight-bold display-1"
              col
              color="primary"
              elevation="10"
              height="70"
              rounded
              target="_blank"
              width="100%"
              x-large
          >
            {{ title }}
            <v-icon class="ml-5" right size="40"
            >fas fa-long-arrow-alt-right
            </v-icon
            >
          </v-btn>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: 'Registration',
  data() {
    return {
      link:
          'https://docs.google.com/forms/d/e/1FAIpQLSeND9jAc0E4iZt-7b3h8FkW1GwIwZUlZvtVLPQ30PDH4cOy2w/viewform',
      title: 'Rejestracja',
    };
  },
};
</script>

<style scoped></style>
