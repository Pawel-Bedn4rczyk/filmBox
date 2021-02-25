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
    style="overflow: hidden"
  >
    <logo v-if="isMobile" :in-nav-drawer="true" />
    <div class="d-flex flex-column justify-between" style="height: 93%">
      <v-row class="ma-0">
        <v-list nav dense>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon class="primaryColor">mdi-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ $t('navDrawer.addFilm') }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-row>
      <v-row
        v-if="isMobile"
        class="ma-0"
        no-gutters
        align="end"
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
  </v-navigation-drawer>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class NavDrawer extends Vue {
  @Prop() isMobile!: boolean
}
</script>
