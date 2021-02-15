<template>
  <div>
    <v-card
      style="position: relative; height: 130px"
      class="my-5 mt-sm-10 primaryBorder d-flex flex-column justify-center"
      tile
    >
      <div
        class="iconContainer d-flex justify-center align-center"
        :class="darkThemeIsOn ? 'primaryBorder' : ''"
      >
        <v-icon color="var(--v-primary-base)" large>{{
          film.icon || 'mdi-video-vintage'
        }}</v-icon>
      </div>
      <v-card-text class="pt-6 pb-0">
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
import themeMixin from '@/mixins/themeMixin'

@Component({
  mixins: [themeMixin],
})
export default class FilmBox extends Vue {
  @Prop({ required: true }) film!: Film
}
</script>

<style scoped>
.iconContainer {
  position: absolute;
  background-color: var(--v-filmContainerbg-base);
  top: -30px;
  right: 20px;
  height: 55px;
  width: 55px;
}
</style>
