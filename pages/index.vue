<template>
  <div>
    <p>Page</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { ObjWithFilm } from '@/interfaces/commons.ts'
import { mapGetters } from 'vuex'

@Component({
  computed: {
    ...mapGetters('dashboard', { films: 'getFilms' }),
  },
})
export default class Dashboard extends Vue {
  films!: ObjWithFilm
  mounted() {
    this.$store.dispatch('dashboard/getFilmsData')
  }
}
</script>
