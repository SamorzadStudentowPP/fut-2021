<template>
  <div id="hero">
    <v-parallax dark height="750" src="@/assets/other/stary_rynek.jpg" style="top:2px;">
      <v-row align="center" class="mt-n12" justify="center">
        <v-col class="text-center" cols="12">
          <v-img
              contain
              max-height="400"
              src="@/assets/other/FUT_poznan.png"
          ></v-img>
          <h2 class="display-0">
          </h2>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: 'HomeHero',
};
</script>

<style scoped>
#hero {
  margin-top: -80px;
}
</style>
