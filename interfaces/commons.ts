export interface Film {
  name: string
  year: number
  director?: string
  genre_pl: string
  genre_en: string
}

export interface ObjWithFilm {
  [key: string]: Film
}
