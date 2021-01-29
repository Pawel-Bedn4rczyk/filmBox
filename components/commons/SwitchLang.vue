<template>
  <v-select
    v-model="$i18n.locale"
    :items="$i18n.locales"
    :item-text="$i18n.locale === 'pl' ? 'namePl' : 'nameEn'"
    item-value="code"
    menu-props="auto"
    label="Select"
    hide-details
    prepend-icon="mdi-web"
    single-line
    dense
  ></v-select>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class SwitchLang extends Vue {}
</script>

<style scoped></style>
