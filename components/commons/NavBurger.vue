<template>
  <v-app-bar-nav-icon
    @click.stop="drawer = !drawer, $emit('openDrawer', drawer)"
  ></v-app-bar-nav-icon>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class NavBurger extends Vue {
  drawer: boolean = false
}
</script>
