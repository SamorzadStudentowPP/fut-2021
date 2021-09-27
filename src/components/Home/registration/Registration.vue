<template>
  <div id="registration">
    <v-parallax
      dark
      src="@/assets/university/wtch.jpg"
      height="350"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" lg="4" md="5" sm="7" xl="3" cols="12">
          <v-btn
            rounded
            x-large
            elevation="10"
            height="70"
            width="100%"
            color="primary"
            class="font-weight-bold display-1"
            :href="link"
            target="_blank"
            col
          >
            {{ title }}
            <v-icon class="ml-5" size="40" right
              >fas fa-long-arrow-alt-right</v-icon
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
