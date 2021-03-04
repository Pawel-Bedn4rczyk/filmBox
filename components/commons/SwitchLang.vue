<template>
  <v-menu open-on-hover top offset-y>
    <template v-slot:activator="{ on }">
      <v-btn text color="primary" v-on="on">
        <v-icon class="mr-1"> mdi-web </v-icon>
        {{ btnLabel }}
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        style="cursor: pointer"
        v-for="(locale, index) in $i18n.locales"
        :key="index"
        @click="$i18n.setLocale(locale.code)"
      >
        <v-list-item-title>{{
          $t(`locales.${locale.name.toLowerCase()}`)
        }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class SwitchLang extends Vue {
  get btnLabel() {
    return this.$t(`locales.${this.$i18n.localeProperties.name.toLowerCase()}`)
  }
}
</script>
