<template>
  <span>
    <v-app-bar
        :color="currentRouteName ? navbarColor : 'primary'"
        :elevation="currentRouteName ? navbarElevation : 50"
        app
        dark
        flat
    >
      <v-app-bar-nav-icon
          class="hidden-lg-and-up"
          @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer class=" hidden-lg-and-up"></v-spacer>
      <div class="d-flex align-center">
        <v-btn
            block
            href="#/"
            text
            x-large
            @click="
            () => {
              $vuetify.goTo(0);
              $vuetify.goTo(main.id);
            }
          "
        >
          <v-img
              alt="sspp-name"
              contain
              min-width="100"
              src="@/assets/other/FUT_white.png"
              width="200"
          />
        </v-btn>
      </div>
      <v-spacer/>
      <template v-if="currentRouteName == '/'">
        <div v-for="(item, index) in items" :key="index">
          <v-btn
              class="hidden-md-and-down text-button"
              elevation="0"
              text
              @click="$vuetify.goTo(item.id)"
          >{{ item.title }}</v-btn
          >
        </div>
      </template>
      <template v-else>
        <div>
          <v-btn
              :href="mainpage.url"
              class="hidden-md-and-down text-button"
              elevation="0"
              text
          >{{ mainpage.title }}</v-btn
          >
        </div>
      </template>
      <div v-for="page in pages" :key="page.title">
        <v-btn
            :href="page.url"
            class="hidden-md-and-down text-button"
            elevation="0"
            text
        >
          {{ page.title }}
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        app
        class="primary"
        dark
        disable-resize-watcher
    >
      <v-list>
        <v-list-item
            @click="
            {
              $vuetify.goTo(0);
              $vuetify.goTo(main.id);
            }
          "
        >
          <div class="d-flex align-center">
            <v-btn
                block
                href="#/"
                text
                x-large
                @click="
                () => {
                  $vuetify.goTo(0);
                  $vuetify.goTo(main.id);
                }
              "
            >
              <v-img
                  alt="Fut-name"
                  contain
                  min-width="100"
                  src="@/assets/other/FUT_white.png"
                  width="170"
              />
            </v-btn>
          </div>
        </v-list-item>
        <template v-if="currentRouteName == '/'">
          <v-list-item
              v-for="item in items"
              :key="item.title"
              @click="$vuetify.goTo(item.id)"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
        <template v-else>
          <v-list-item :href="mainpage.url">
            <v-list-item-content>
              <v-list-item-title>
                {{ mainpage.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <div>
            <v-btn
                class="hidden-md-and-down text-button"
                elevation="0"
                text
            >{{
            }}</v-btn>
          </div>
        </template>

        <v-list-item v-for="page in pages" :key="page.url" :href="page.url">
          <v-list-item-content>
            <v-list-item-title>
              {{ page.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </span>
</template>

<script>
export default {
  name: 'Navbar',
  mounted() {
    window.onscroll = () => {
      this.changeColor();
    };
  },
  data() {
    return {
      appTitle: 'FUT PP 2021',
      drawer: false,
      navbarColor: 'transparent',
      navbarElevation: 0,
      main: {title: 'FUT 2021', id: '#hero'},
      mainpage: {title: 'Strona główna', url: '#/'},
      items: [
        {title: 'Zjazd', id: '#info'},
        {title: 'Rejestracja', id: '#registration'},
        {title: 'O SSPP', id: '#studentsUnion'},
        {title: 'Harmonogram', id: '#agenda'},
        {title: 'Panele szkoleniowe', id: '#trainings'},
        {title: 'Szkoleniowcy', id: '#trainers'},
        {title: 'Zakwaterowanie', id: '#accommodation'},
        {title: 'Patronaty', id: '#partners'},
      ],
      pages: [],
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.path;
    },
  },
  methods: {
    changeColor() {
      if (
        this.currentRouteName != '/' ||
          document.body.scrollTop > 85 ||
          document.documentElement.scrollTop > 85
      ) {
        this.navbarColor = 'primary';
        this.navbarElevation = 10;
      } else {
        this.navbarColor = 'transparent';
        this.navbarElevation = 0;
      }
    },
  },
  watch: {
    $route() {
      this.changeColor();
    },
  },
};
</script>

<style scoped></style>
