<template>
  <Dashboard :films="allfilms" />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { FilmsByGenre } from '@/interfaces/commons'
import { mapGetters } from 'vuex'
import { $vxm } from '~/utils/api'

@Component({
  computed: {
    ...mapGetters('dashboard', { allfilms: 'films' }),
  },
})
export default class DashboardPage extends Vue {
  allfilms!: FilmsByGenre

  mounted() {
    $vxm.dashboard.dispatchFilms()
  }
}
</script>
