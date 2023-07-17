import { durationOfShortsFilm } from "./constans";

function handleMovieResponse(movies, movieRequest, checkboxType) {
  let resMovies = movies;

  if (movieRequest !== "") {
    resMovies = movies.filter(
      (movie) =>
        movie.nameRU.toLowerCase().includes(movieRequest.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(movieRequest.toLowerCase())
    );
  }

  if (checkboxType) {
    resMovies = resMovies.filter((movie) => movie.duration <= durationOfShortsFilm);
  }

  return resMovies;
}

export default handleMovieResponse;
