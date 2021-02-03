import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { ObjWithFilm } from '@/interfaces/commons.ts'
import { $axios } from '~/utils/api'

@Module({
  stateFactory: true,
  namespaced: true,
})
export default class DashboardStore extends VuexModule {
  films!: ObjWithFilm

  @Mutation
  setFilms(films: ObjWithFilm) {
    this.films = films
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
