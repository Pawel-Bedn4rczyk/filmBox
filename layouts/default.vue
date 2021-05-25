<template>
  <v-app dark>
    <snackbar />
    <v-app-bar app clipped-left class="appBgColor" elevation="1">
      <logo :in-nav-drawer="false" />
      <v-spacer />
      <v-col
        v-if="!isMobile"
        cols="6"
        sm="4"
        md="3"
        lg="2"
        class="d-flex align-center justify-end"
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
    <nav-drawer v-show="!isMobile || drawer"/>
    <v-main>
      <nuxt />
    </v-main>
    <v-bottom-navigation
      v-if="!isMobile"
      background-color="transparent"
      class="elevation-0"
    >
      <v-row justify="end" align="start" class="ma-0" style="opacity: 0.1">
        <v-icon class="mr-3 mt-1" x-large> mdi-video-vintage</v-icon>
        <p class="text-h3 pr-6">FILMBOX</p>
      </v-row>
    </v-bottom-navigation>
  </v-app>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Snackbar from '~/components/commons/Snackbar.vue'
import commonMixin from '@/mixins'

@Component({
  components: { Snackbar },
  name: 'DefaultLayout',
  mixins: [commonMixin],
})
export default class DefaultLayout extends Vue {
  drawer: boolean = false
}
</script>
<style scoped>
.appBgColor {
  background: var(--v-appBar-base) !important;
}
</style>
