<template>
  <div>
    <div v-for="(arr, name) in films" :key="name">
      <v-card tile flat>
        <v-card-title>
          <v-row class="ma-0" justify="center" align="center" no-gutters>
            <v-col
              cols="2"
              class="d-flex flex-column justify-center align-center pa-0 ma-0"
              style="border-bottom: 2px solid red"
            >
              {{ $i18n.locale === 'pl' ? arr[0].genre_pl : name }}
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
import { FilmsByGenre } from '@/interfaces/commons.ts'

@Component
export default class Dashboard extends Vue {
  @Prop({ required: true }) films!: FilmsByGenre
}
</script>
