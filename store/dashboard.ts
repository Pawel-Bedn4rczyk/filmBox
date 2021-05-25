import {
  createModule,
  action,
  mutation,
  extractVuexModule,
} from 'vuex-class-component'
import { FilmsByGenre, Film, FilmsGenre } from '@/interfaces/commons'
import { groupBy } from 'lodash'
import { $axios } from '~/utils/api'
import { $vxm, $i18n } from '@/utils/api'
import { FilmGenreEnum, SnackbarTypes } from '@/enums/enums'

const VuexModule = createModule({
  namespaced: 'dashboard',
  strict: false,
  target: 'nuxt',
})
export class DashboardStore extends VuexModule {
  allfilms: FilmsByGenre = {}

  @action
  async dispatchFilms(): Promise<void> {
    const data = await $axios.$get(`${$axios.defaults.baseURL}.json`)
    this.commitFilms(data)
  }

  @action
  async dispatchOneFilm(payload: Film['id']) {
    const data = await $axios.$get(`${$axios.defaults.baseURL}/${payload}.json`)
    return data
  }

  @action
  async dispatchAddFilm(film: Film): Promise<void> {
    await $axios.post(`${$axios.defaults.baseURL}.json`, film)
    this.dispatchFilms()
  }

  @action
  async dispatchPutFilm(payload: {
    id: Film['id']
    data: Film
  }): Promise<void> {
    await $axios.put(
      `${$axios.defaults.baseURL}/${payload.id}.json`,
      payload.data
    )
    this.dispatchFilms()
  }

  @action
  async dispatchDeleteFilm(payload: Film['id']) {
    await $axios.delete(`${$axios.defaults.baseURL}/${payload}.json`)
  }

  @mutation
  commitFilms(films: { [key: string]: Film }): void {
    //add id
    const arr = Object.entries(films).map((el) => {
      let obj = {
        ...el[1],
        id: el[0],
      }
      return obj
    })
    // sort by genre
    this.allfilms = groupBy(arr, 'genre')
  }

  get films(): FilmsByGenre {
    return this.allfilms
  }

  get filmsGenre(): Array<FilmsGenre> {
    const _arr: Array<FilmsGenre> = []
    Object.entries(FilmGenreEnum).map((arr) => {
      const obj = {
        text: $i18n.t(`filmGenre.${arr[1]}`),
        value: arr[1],
      }
      _arr.push(obj)
    })
    return _arr
  }
}
const extractedVuexModule = extractVuexModule(DashboardStore)
export default extractedVuexModule.dashboard
