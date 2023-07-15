function handleMovieResponse(movies, movieRequest, checkboxType) {
  let resMovies = [];

  if (movieRequest !== "") {
    resMovies = movies.filter(
      (movie) =>
        movie.nameRU.toLowerCase().includes(movieRequest.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(movieRequest.toLowerCase())
    );
  }

  if (checkboxType) {
    resMovies = resMovies.filter((movie) => movie.duration <= 40);
  }

  return resMovies;
}

export default handleMovieResponse;
