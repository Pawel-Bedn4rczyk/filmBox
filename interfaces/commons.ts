export interface Film {
  name: string
  year: number
  director?: string
  genre_pl: string
  genre_en: string
}

export interface FilmsByGenre {
  [key: string]: Array<Film>
}
