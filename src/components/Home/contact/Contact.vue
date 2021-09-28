<template>
  <div id="contact" class="mb-15">
    <v-container>
      <component-title class="mb-5 mt-10" text="Kontakt"/>

      <component-text :text="contactByForm" class="mt-8 text-center"/>

      <v-row align="center" justify="center">
        <v-col class="justify-center text-center" cols="11" lg="7" md="9">
          <v-btn
              class="text-button"
              color="primary"
              href="https://forms.gle/7oTmvfcVns338BwH7"
              outlined
              rounded
              target="_blank"
              type="link"
              x-large
          >
            {{ contactUs }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ComponentText from '@/components/shared/ComponentText';

import ComponentTitle from '@/components/shared/ComponentTitle';

export default {
  name: 'Contact',

  components: {ComponentTitle, ComponentText},
  data() {
    return {
      contactUs: 'Skontaktuj się z nami',
      contactByForm: 'Aby się z nami skontaktować użyj poniższego formularza',
    };
  },
};
</script>

<style scoped></style>
