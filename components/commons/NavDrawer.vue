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
    <logo v-if="isMobile" :in-nav-drawer="true" />
    <v-list nav dense>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon color="var(--v-primary-base)">mdi-plus</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ $t('navDrawer.addFilm') }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class NavDrawer extends Vue {
  @Prop() isMobile!: boolean
}
</script>
