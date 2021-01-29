<template>
  <v-app dark>
    <v-app-bar app>
      <v-toolbar-title>FILMBOX</v-toolbar-title>
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
