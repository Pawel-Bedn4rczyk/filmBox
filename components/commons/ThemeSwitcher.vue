<template>
  <v-tooltip :bottom="tooltipBottom" :top="!tooltipBottom">
    <template v-slot:activator="{ on }">
      <v-btn icon class="primaryColor" v-on="on" @click="switchTheme">
        <v-icon> {{ icon }} </v-icon>
      </v-btn>
    </template>
    <span>{{ $t('layout.switchTheme') }}</span>
  </v-tooltip>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class ThemeSwitcher extends Vue {
  @Prop({ required: false, default: true }) tooltipBottom?: boolean
  get icon(): string {
    return this.$vuetify.theme.dark ? 'mdi-weather-sunny' : 'mdi-weather-night'
  }

  switchTheme(): void {
    this.$vuetify.theme.dark = !this.$vuetify.theme.dark
  }
}
</script>

<style scoped></style>
