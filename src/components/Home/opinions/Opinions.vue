<template>
  <div id="curiosity">
    <v-container fluid>
      <component-title class="mb-5 mt-10" text="Ciekawostki"/>

      <v-row align="center" justify="center">
        <v-col class="hidden-sm-and-down" cols="12" lg="7" md="9">
          <v-carousel
              cycle
              height="400"
              hide-delimiters
              interval="10000"
              show-arrows-on-hover
          >
            <v-carousel-item v-for="(slide, index) in opinionList" :key="index">
              <opinion-item
                  :name="slide.name"
                  :quote="slide.quote"
                  :src="slide.src"
                  style="height:100%"
              />
            </v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col class="hidden-md-and-up" cols="12">
          <v-carousel cycle height="500" hide-delimiters show-arrows-on-hover>
            <v-carousel-item v-for="(slide, index) in opinionList" :key="index">
              <opinion-item-sm-and-down
                  :name="slide.name"
                  :quote="slide.quote"
                  :src="slide.src"
              />
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import OpinionItem from '@/components/Home/opinions/OpinionItem';
import OpinionItemSmAndDown from '@/components/Home/opinions/OpinionItemSmAndDown';
import ComponentTitle from '@/components/shared/ComponentTitle';

export default {
  name: 'Opinions',
  components: {ComponentTitle, OpinionItemSmAndDown, OpinionItem},
  data() {
    return {
      opinionList: [
        {
          src: 'Marianna.jpg',
          quote:
              '"Wyjazd na Karpicko to jeden z najlepszych sposób ' +
              'na rozpoczęcie przygody ze studiowaniem! Razem z przyjaciółką ' +
              'poznałyśmy dzięki temu wiele ciekawych osób, które tak jak my ' +
              'dopiero zaczynały swoją przygodę z Politechniką Poznańską"',
          name: '- Marianna Zawal',
        },
      ],
    };
  },
};
</script>

<style>
.fa-chevron-right,
.fa-chevron-left {
  font-size: 24px !important;
}

.fa-chevron-right {
  margin-right: -3px;
}

.fa-chevron-left {
  margin-left: -3px;
}
</style>
