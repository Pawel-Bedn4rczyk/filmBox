<template>
  <div>
    <v-card
      style="border: 1px solid red; position: relative; height: 100px"
      class="my-sm-10"
      tile
    >
      <div class="filmIcon d-flex justify-center align-center">
        <v-icon color="red">{{ film.icon || 'mdi-video-vintage' }}</v-icon>
      </div>
      <v-card-text>
        <h3>{{ film.name }}</h3>
        <span>{{ film.year }}</span>
        <p class="caption">{{ film.director }}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Film } from '@/interfaces/commons.ts'

@Component
export default class FilmBox extends Vue {
  @Prop({ required: true }) film!: Film
}
</script>
<style scoped>
.filmIcon {
  position: absolute;
  background-color: white;
  top: -25px;
  right: 20px;
  height: 50px;
  width: 50px;
}
</style>
