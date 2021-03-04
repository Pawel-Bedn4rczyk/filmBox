import { TranslateResult, LocaleMessage } from "vue-i18n";
import { SnackbarTypes } from "@/enums/enums";
import { FilmGenreEnum } from "@/enums/enums";

export interface Snackbar {
  text: TranslateResult | LocaleMessage
  type: SnackbarTypes
}

export interface Film {
  title: string
  year: string
  director?: string
  genre: string
  icon: string
  rating: number
}

export interface FilmsGenre {
  text: TranslateResult,
  value:FilmGenreEnum
}

export interface FilmsByGenre {
  [key: string]: Array<Film>
}
