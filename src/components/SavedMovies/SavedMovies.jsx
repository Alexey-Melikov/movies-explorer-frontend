import "./SavedMovies.css";
import { useEffect, useState } from "react";
import handleMovieResponse from "../../utils/MovieResponse";

// Components =>
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function SavedMovies({ loggedIn, savedMovies, handleDeleteMovie }) {
  const [allreadySearch, setAllreadySearch] = useState(false);
  const [isPreloader, setIsPreloader] = useState(false);
  const [movieRequest, setMovieRequest] = useState("");
  const [checkboxStatus, setCheckboxStatus] = useState(false);
  const [movies, setMovies] = useState(savedMovies);

  function handleCheckboxSearch(checkboxStatus) {
    const resMovies = handleMovieResponse(
      savedMovies,
      movieRequest,
      !checkboxStatus
    );
    setMovies(resMovies);
  }

  function handleMovieSearch(movieRequest, checkboxStatus) {
    setIsPreloader(true);
    setAllreadySearch(true);
    const resMovies = handleMovieResponse(
      savedMovies,
      movieRequest,
      checkboxStatus
    );
    setMovies(resMovies);
    setIsPreloader(false);
  }

  useEffect(() => {
    setMovies(savedMovies);
  }, [savedMovies]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="saved-movies">
        <SearchForm
          movieRequest={movieRequest}
          setMovieRequest={setMovieRequest}
          checkboxStatus={checkboxStatus}
          setCheckboxStatus={setCheckboxStatus}
          handleCheckboxSearch={handleCheckboxSearch}
          handleMovieSearch={handleMovieSearch}
        />
        <MoviesCardList
          allReadySearch={allreadySearch}
          movies={movies}
          isPreloader={isPreloader}
          handleDeleteMovie={handleDeleteMovie}
          savedMovies={savedMovies}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
