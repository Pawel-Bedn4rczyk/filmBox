import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { FilmsByGenre, Film } from '@/interfaces/commons.ts'
import { groupBy } from 'lodash'
import { $axios } from '~/utils/api'

@Module({
  stateFactory: true,
  namespaced: true,
})
export default class DashboardStore extends VuexModule {
  films: FilmsByGenre = {}

  @Mutation
  setFilms(films: { [key: string]: Film }) {
    this.films = groupBy(films, 'genre')
  }

  @Action({ commit: 'setFilms' })
  async getFilmsData() {
    const res = await $axios
      .$get(`${$axios.defaults.baseURL}films.json`)
      .catch((error) => console.error(error))
    return res
  }

  get getFilms() {
    return this.films
  }
}
