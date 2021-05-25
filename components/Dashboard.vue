<template>
  <div>
    <div v-for="(arr, name) in films" :key="name">
      <v-card tile flat class="transparentBg">
        <v-card-title class="mb-8 mb-sm-0 primaryColor">
          <v-row
            class="ma-0"
            :justify="isMobile ? 'center' : 'start'"
            align="center"
            no-gutters
          >
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
        <v-card-text v-if="!isMobile">
          <v-sheet class="mx-auto transparentBg">
            <v-slide-group show-arrows>
              <v-slide-item v-for="(film, j) in arr" :key="j" disabled>
                <film-box class="mx-3" :film="film" />
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </v-card-text>
        <v-card-text v-else>
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
import commonMixin from '@/mixins'

@Component({
  mixins: [commonMixin],
})
export default class Dashboard extends Vue {
  @Prop({ required: true }) films!: FilmsByGenre
}
</script>
<style scoped>
.transparentBg {
  background: transparent;
}
</style>
