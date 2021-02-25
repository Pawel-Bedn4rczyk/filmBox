<template>
  <nuxt-link to="/">
    <v-row align="center" class="bottomBorder" :class="inNavDrawer ? 'drawerStyle': 'defaultStyle'">
      <v-icon class="mr-3" color="var(--v-primary-base)">
        mdi-video-vintage</v-icon
      >
      <span>FILMBOX</span>
    </v-row>
  </nuxt-link>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class Logo extends Vue {
  @Prop() inNavDrawer!:boolean
}
</script>
<style scoped>
.drawerStyle{
  margin: 15px 0 10px 20px;
  width: 112px;
  padding: 0 4px;

}
.defaultStyle{
  margin-left: 4px;
  padding: 0 4px;
}
</style>
