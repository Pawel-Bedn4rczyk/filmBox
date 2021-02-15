<template>
  <div>
    <v-card
      style="position: relative; height: 130px; cursor: pointer"
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
        <v-row align="center" no-gutters class="ma-0">
          <v-col>
            <h3>{{ film.name }}</h3>
            <span>{{ film.year }}</span>
            <p class="caption mb-0">{{ film.director }}</p>
            <v-rating
              v-model="film.rating"
              background-color="var(--v-primary-base)"
              color="var(--v-primary-base)"
              half-increments
              readonly
            ></v-rating>
          </v-col>
        </v-row>
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
.v-rating >>> button:first-child {
  padding-left: 0px;
}
.v-rating >>> button {
  padding-top: 5px;
}
.v-card {
  transition: transform 0.4s ease-in-out;
}

.v-card:hover {
  transform: scale(1.1);
  box-shadow: 0 0 0.3rem var(--v-primary-base);
}
</style>
