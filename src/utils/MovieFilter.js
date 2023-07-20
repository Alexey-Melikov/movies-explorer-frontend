import { MOVIES_API } from "./constans";

export default function movieFilter(movie) {

  const filteredMovie = {
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    image: `${MOVIES_API}${movie.image.url}`,
    trailerLink: movie.trailerLink,
    thumbnail: `${MOVIES_API}${movie.image.url}`,
    movieId: movie.id,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
  };
  return filteredMovie;
}
