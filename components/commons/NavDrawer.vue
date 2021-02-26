<template>
  <v-navigation-drawer
    hide-overlay
    permanent
    stateless
    :absolute="isMobile"
    :temporary="isMobile"
    :expand-on-hover="!isMobile"
    clipped
    clipped-left
    app
    color="var(--v-appBar-base)"
  >
    <div class="d-flex flex-column justify-between" style="height: 100%">
      <div v-if="isMobile" style="height: 50px">
        <logo :in-nav-drawer="true" />
      </div>
      <div style="height: 100%">
        <v-row class="my-0 mx-2">
          <v-list nav dense style="width: 100%; padding: 0">
            <v-list-item link>
              <v-list-item-icon>
                <v-icon class="primaryColor">mdi-plus</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{
                $t('navDrawer.addFilm')
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-row>
      </div>
      <div style="height: 50px">
        <v-row
          v-if="isMobile"
          class="ma-0 mb-3"
          no-gutters
          align="start"
          justify="space-around"
        >
          <v-col cols="7">
            <switch-lang />
          </v-col>
          <v-col cols="2">
            <theme-switcher />
          </v-col>
        </v-row>
      </div>
    </div>
  </v-navigation-drawer>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class NavDrawer extends Vue {
  @Prop() isMobile!: boolean
}
</script>
<style scoped>
.v-navigation-drawer >>> .v-navigation-drawer__content {
  /* overflow-y: hidden !important; */
}
</style>
