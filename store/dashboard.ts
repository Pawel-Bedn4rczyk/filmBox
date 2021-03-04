import {
  createModule,
  action,
  mutation,
  extractVuexModule,
} from 'vuex-class-component'
import { FilmsByGenre, Film, FilmsGenre } from '@/interfaces/commons.ts'
import { groupBy } from 'lodash'
import { $axios } from '~/utils/api'
import { $vxm, $i18n } from "@/utils/api";
import { FilmGenreEnum, SnackbarTypes } from '@/enums/enums'

const VuexModule = createModule({
  namespaced: 'dashboard',
  strict: false,
  target: 'nuxt',
})
export class DashboardStore extends VuexModule {
  allfilms: FilmsByGenre = {}

  @action
  public async dispatchFilms(): Promise<void> {
    try {
      const data = await $axios.$get(`${$axios.defaults.baseURL}films.json`)
      this.commitFilms(data)
    } catch (e) {
      throw new Error(e)
    }
  }

  @action
  public async dispatchAddFilm(film:Film): Promise<void> {
    try {
      await $axios.post(`${$axios.defaults.baseURL}films.json`, film)
      $vxm.snackbar.setSnack({
        text: $i18n.t('messages.successAdd'),
        type: SnackbarTypes.PRIMARY
      })
    } catch (e) {
      $vxm.snackbar.setSnack({
        text: $i18n.t('messages.errorAdd'),
        type: SnackbarTypes.ERROR
      })
      throw new Error(e)
    }
  }

  @mutation
  private commitFilms(films: { [key: string]: Film }):void {
    this.allfilms = groupBy(films, 'genre')
  }

  public get films():FilmsByGenre {
    return this.allfilms
  }

  public get genreIcons():string[] {
    return [
      'mdi-filmstrip',
      'mdi-filmstrip-box-multiple',
      'mdi-movie-roll',
      'mdi-movie',
      'mdi-movie-open-play',
      'mdi-movie-open-star',
      'mdi-movie-star',
      'mdi-heart',
      'mdi-basketball',
      'mdi-drama-masks',
      'mdi-delta',
      'mdi-animation-play',
    ]
  }

  public get filmsGenre():Array<FilmsGenre> {
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
