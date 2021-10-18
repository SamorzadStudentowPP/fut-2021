<template>
  <div id="hero">
    <v-parallax dark src="@/assets/other/stary_rynek.jpg" height="750" style="top:2px;">
      <v-row align="center" justify="center" class="mt-16">
        <v-col class="text-center" cols="12">
          <v-row>
            <v-col cols="12">
              <v-img
                  src="@/assets/other/FUT_poznan.png"
                  contain
                  max-height="400"
              ></v-img>
            </v-col>
          </v-row>
          <v-row align="center" justify="center" class="mt-n4">
            <v-col cols="12" lg="3" md="4" sm="6">
                <countdown date="2021-10-21T12:00:00" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
import Countdown from '@/components/Home/Countdown';
export default {
  name: 'HomeHero',
  components: {Countdown},
};
</script>

<style scoped>
#hero {
  margin-top: -80px;
}
</style>
