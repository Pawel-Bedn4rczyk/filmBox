<template>
  <div>
    <Dashboard :films="films" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { FilmsByGenre } from '@/interfaces/commons.ts'
import { mapGetters } from 'vuex'

@Component({
  computed: {
    ...mapGetters('dashboard', { films: 'getFilms' }),
  },
})
export default class DashboardPage extends Vue {
  films!: FilmsByGenre

  mounted() {
    this.$store.dispatch('dashboard/getFilmsData')
  }
}
</script>
