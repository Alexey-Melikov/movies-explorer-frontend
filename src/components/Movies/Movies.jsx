import "./Movies.css";
import { useEffect, useState } from "react";

// Components =>
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import handleMovieResponse from "../../utils/MovieResponse";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// Api =>
import { getMovies } from "../../utils/MoviesApi";

function Movies({ loggedIn, handleLikeMovie, handleDeleteMovie, savedMovies }) {
  const [movies, setMovies] = useState([]);
  const [isPreloader, setIsPreloader] = useState(false);
  const [movieRequest, setMovieRequest] = useState("");
  const [allreadySearch, setAllreadySearch] = useState(false);
  const [searchErrorStatus, setSearchErrorStatus] = useState("");
  const [checkboxStatus, setCheckboxStatus] = useState(false);

  function getLocalData() {
    if (
      localStorage.getItem("movies") &&
      localStorage.getItem("checkboxStatus") &&
      localStorage.getItem("movieRequest") &&
      localStorage.getItem("beatfilm-movies")
    ) {
      const localData = {
        movie: JSON.parse(localStorage.getItem("movies")),
        movieRequest: JSON.parse(localStorage.getItem("movieRequest")),
        checkboxStatus: JSON.parse(localStorage.getItem("checkboxStatus")),
        beatfilMovies: JSON.parse(localStorage.getItem("beatfilm-movies")),
      };
      return localData;
    }
  }

  function handleMovieSearch(movieRequest, checkboxStatus) {
    setAllreadySearch(true);
    setSearchErrorStatus("");
    localStorage.setItem("movieRequest", JSON.stringify(movieRequest));
    localStorage.setItem("checkboxStatus", JSON.stringify(checkboxStatus));
    setIsPreloader(true);
    if (getLocalData()) {
      const localData = getLocalData();
      const resMovies = handleMovieResponse(
        localData.movie,
        movieRequest,
        checkboxStatus
      );
      setMovies(resMovies);
      setIsPreloader(false);
    } else {
      getMovies()
        .then((movies) => {
          const resMovies = handleMovieResponse(
            movies,
            movieRequest,
            checkboxStatus
          );
          setMovies(resMovies);
          localStorage.setItem("beatfilm-movies", JSON.stringify(movies));
          localStorage.setItem("movies", JSON.stringify(resMovies));
        })
        .catch((err) => {
          console.log(err);
          setSearchErrorStatus(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          );
        })
        .finally(() => {
          setIsPreloader(false);
        });
    }
  }

  function handleCheckboxSearch(checkboxStatus) {
    if (getLocalData()) {
      const localData = getLocalData();
      const movies = handleMovieResponse(
        localData.beatfilMovies,
        localData.movieRequest,
        !checkboxStatus
      );
      setMovies(movies);
    }
  }

  useEffect(() => {
    if (getLocalData()) {
      const localData = getLocalData();
      const movies = handleMovieResponse(
        localData.movie,
        localData.movieRequest,
        localData.checkboxStatus
      );
      setMovies(movies);
      setMovieRequest(localData.movieRequest);
      setCheckboxStatus(localData.checkboxStatus);
      setAllreadySearch(true);
    }
  }, []);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="movies">
        <SearchForm
          movieRequest={movieRequest}
          setMovieRequest={setMovieRequest}
          handleMovieSearch={handleMovieSearch}
          checkboxStatus={checkboxStatus}
          setCheckboxStatus={setCheckboxStatus}
          handleCheckboxSearch={handleCheckboxSearch}
        />
        <MoviesCardList
          allReadySearch={allreadySearch}
          movies={movies}
          isPreloader={isPreloader}
          searchErrorStatus={searchErrorStatus}
          handleLikeMovie={handleLikeMovie}
          handleDeleteMovie={handleDeleteMovie}
          savedMovies={savedMovies}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
