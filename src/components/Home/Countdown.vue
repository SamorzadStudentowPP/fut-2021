<template>
  <div class="countdown">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="3" sm="3" md="3" lg="3">
        <h2 class="text-sm-h4 text-md-h3 text-lg-h3 text-xl-h3 text-h4 headline text-center">
          {{ days | two_digits }}
        </h2>
        <p class="text-sm-subtitle-1 text-md-h6 text-lg-h6 text-xl-h6 text-caption headline text-center font-weight-thin">DNI</p>
      </v-col>
      <v-col class="text-center" cols="3" sm="3" md="3" lg="3">
        <h2 class="text-sm-h4 text-md-h3 text-lg-h3 text-xl-h3 text-h4 headline text-center">
          {{ hours | two_digits }}
        </h2>
        <p class="text-sm-subtitle-1 text-md-h6 text-lg-h6 text-xl-h6 text-caption headline text-center font-weight-thin">GODZIN</p>
      </v-col>
      <v-col class="text-center" cols="3" sm="3" md="3" lg="3">
        <h2 class="text-sm-h4 text-md-h3 text-lg-h3 text-xl-h3 text-h4 headline text-center">
          {{ minutes | two_digits }}
        </h2>
        <p class="text-sm-subtitle-1 text-md-h6 text-lg-h6 text-xl-h6 text-caption headline text-center font-weight-thin">MINUT</p>
      </v-col>
      <v-col class="text-center" cols="3" sm="3" md="3" lg="3">
        <h2 class="text-sm-h4 text-md-h3 text-lg-h3 text-xl-h3 text-h4 headline text-center">
          {{ seconds | two_digits }}
        </h2>
        <p class="text-sm-subtitle-1 text-md-h6 text-lg-h6 text-xl-h6 text-caption headline text-center font-weight-thin">SEKUND</p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Countdown',
  mounted() {
    window.setInterval(() => {
      this.now = Math.floor((new Date()).getTime() / 1000);
    },1000);
  },
  props: {
    date: {
      type: String
    }
  },
  data() {
    return {
      now: Math.floor((new Date()).getTime() / 1000)
    };
  },
  computed: {
    dateInMilliseconds() {
      return Math.floor(Date.parse(this.date) / 1000);
    },
    seconds() {
      return (this.dateInMilliseconds - this.now) % 60;
    },
    minutes() {
      return Math.floor((this.dateInMilliseconds - this.now) / 60) % 60;
    },
    hours() {
      return Math.floor((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.floor((this.dateInMilliseconds - this.now) / 60 / 60 / 24);
    }
  },
  filters: {
    two_digits: function (value) {
      if (isNaN(value)) {
        return value;
      }
      if (value < 0) {
        return '00';
      }
      if (value.toString().length <= 1) {
        return `0${value}`;
      }
      return value;
    }
  }
};
</script>

<style scoped>
</style>