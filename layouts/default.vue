<template>
  <v-app dark>
    <v-app-bar app>
      <nuxt-link to="/">
        <v-toolbar-title class="d-flex align-center bottomBorder px-3">
          <v-icon class="mr-3" color="var(--v-primary-base)">
            mdi-video-vintage</v-icon
          >
          <span>FILMBOX</span>
        </v-toolbar-title>
      </nuxt-link>
      <v-spacer />
      <v-col cols="6" sm="4" lg="2" class="d-flex align-center">
        <SwitchLang />
        <ThemeSwitcher />
      </v-col>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Default',
})
</script>
