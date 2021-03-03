export interface Film {
  title: string
  year: string
  director?: string
  genre: string
  icon: string
  rating: number
}

export interface FilmsByGenre {
  [key: string]: Array<Film>
}
