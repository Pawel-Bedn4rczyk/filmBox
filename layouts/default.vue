<template>
  <v-app dark>
    <v-app-bar app clipped-left class="appBgColor">
      <logo :in-nav-drawer="false" />
      <v-spacer />
      <v-col
        v-if="!isMobile"
        cols="6"
        sm="4"
        md="3"
        lg="2"
        class="d-flex align-center"
      >
        <switch-lang />
        <theme-switcher />
      </v-col>
      <v-col v-else class="d-flex justify-end">
        <!-- burger icon -->
        <v-app-bar-nav-icon
          class="primaryColor"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </v-col>
    </v-app-bar>
    <nav-drawer v-show="!isMobile || drawer" :is-mobile="isMobile" />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'DefaultLayout',
})
export default class DefaultLayout extends Vue {
  drawer: boolean = false
  get isMobile() {
    return this.$vuetify.breakpoint.smAndDown
  }
}
</script>
<style scoped>
.appBgColor {
  background: var(--v-appBar-base) !important;
}
</style>
