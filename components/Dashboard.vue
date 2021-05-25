<template>
  <div>
    <div v-for="(arr, name) in films" :key="name">
      <v-card tile flat style="background: transparent">
        <v-card-title class="mb-8 mb-sm-0 primaryColor">
          <v-row class="ma-0" justify="center" align="center" no-gutters>
            <v-col
              cols="12"
              sm="6"
              md="4"
              lg="3"
              xl="2"
              class="d-flex flex-column justify-center bottomBorder align-center pa-0 ma-0"
            >
              {{ $t(`filmGenre.${arr[0].genre}`).toUpperCase() }}
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-row justify="center">
            <v-col
              v-for="(film, j) in arr"
              :key="j"
              cols="12"
              sm="6"
              md="4"
              lg="3"
              xl="2"
            >
              <film-box :film="film" />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { FilmsByGenre } from '@/interfaces/commons'

@Component
export default class Dashboard extends Vue {
  @Prop({ required: true }) films!: FilmsByGenre
}
</script>
