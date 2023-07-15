import "./MoviesCardList.css";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// Components =>
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

// Constants =>
import {
  DISPLAY_WIDTH_1280,
  DISPLAY_WIDTH_768,
  DISPLAY_WIDTH_320,
  ADD_CARD_WIDTH_MORE_768,
  ADD_CARD_WIDTH_LESS_768,
} from "../../../utils/constans";

function MoviesCardList({
  movies,
  isPreloader,
  allReadySearch,
  searchErrorStatus,
  handleLikeMovie,
  handleDeleteMovie,
  savedMovies,
}) {
  const location = useLocation();

  const [moviesOnPage, setMoviesOnPage] = useState(DISPLAY_WIDTH_1280);
  const [addOnPage, setAddOnPage] = useState(ADD_CARD_WIDTH_MORE_768);

  function windowWidth() {
    const width = window.innerWidth;

    if (width >= 1099) {
      setMoviesOnPage(DISPLAY_WIDTH_1280);
      setAddOnPage(ADD_CARD_WIDTH_MORE_768);
    } else if (width < 1280 && width > 689) {
      setMoviesOnPage(DISPLAY_WIDTH_768);
      setAddOnPage(ADD_CARD_WIDTH_LESS_768);
    } else {
      setMoviesOnPage(DISPLAY_WIDTH_320);
      setAddOnPage(ADD_CARD_WIDTH_LESS_768);
    }
  }

  window.onresize = () => {
    setTimeout(windowWidth(), 100);
  };

  useEffect(() => {
    windowWidth();
  }, []);

  function handleMoreMovie() {
    setMoviesOnPage(moviesOnPage + addOnPage);
  }
  
  function checkSavedMovie(movie) {
    return savedMovies.find((savedMovie) => {
      return savedMovie.movieId === movie.id;
    });
  }

  return (
    <section className="movies-card-list">
      {isPreloader && <Preloader />}
      {movies.length === 0 &&
      !isPreloader &&
      allReadySearch &&
      !searchErrorStatus ? (
        <p className="movies-card-list-subtitle">Ничего не найдено</p>
      ) : (
        <p className="movies-card-list-subtitle">{searchErrorStatus}</p>
      )}
      {location.pathname === "/movies" ? (
        <>
          <ul className="movies-card-list__container">
            {movies.slice(0, moviesOnPage).map((movie) => (
              <MoviesCard
                cardTypeSaved={checkSavedMovie(movie)}
                key={movie.id}
                handleLikeMovie={handleLikeMovie}
                handleDeleteMovie={handleDeleteMovie}
                card={movie}
                savedMovies={savedMovies}
              />
            ))}
          </ul>
          {movies.length > moviesOnPage && (
            <button
              onClick={handleMoreMovie}
              className="movies-card-list__button hover"
            >
              Ещё
            </button>
          )}
        </>
      ) : (
        <>
          <ul className="movies-card-list__container">
            {movies.map((card) => (
              <MoviesCard
                key={card._id}
                handleDeleteMovie={handleDeleteMovie}
                card={card}
              />
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
