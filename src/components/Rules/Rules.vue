<template>
  <div id="rules">
    <v-container fluid>
      <component-title text="Regulamin"/>
      <v-row align="center" justify="center">
        <v-btn
            class="mt-8 text-button"
            color="primary"
            download
            href="/rules/Regulamin_Karpicko_2021.docx"
            outlined
            rounded
            x-large
        >
          Regulamin
        </v-btn>
      </v-row>
      <v-row align="center" justify="center">
        <v-btn
            class="mt-4 text-button"
            color="primary"
            download
            href="/rules/Zasady_bezpieczeństwa.docx"
            outlined
            rounded
            x-large
        >
          Zasady bezpieczeństwa
        </v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ComponentTitle from '@/components/ComponentTitle';

export default {
  name: 'Rules',
  components: {ComponentTitle},
};
</script>

<style scoped></style>
