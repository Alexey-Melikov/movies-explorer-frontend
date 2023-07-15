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
  const [movies, setMovies] = useState([]);

  function getLocalData() {
    if (
      localStorage.getItem("savedCheckboxStatus") &&
      localStorage.getItem("savedMovieRequest")
    ) {
      const localData = {
        movieRequest: JSON.parse(localStorage.getItem("savedMovieRequest")),
        checkboxStatus: JSON.parse(localStorage.getItem("savedCheckboxStatus")),
      };
      return localData;
    }
  }

  function handleCheckboxSearch(checkboxStatus) {
    if (getLocalData()) {
      const localData = getLocalData();
      const resMovies = handleMovieResponse(
        savedMovies,
        localData.movieRequest,
        !checkboxStatus
      );
      setMovies(resMovies);
    }
  }
  function handleMovieSearch(movieRequest, checkboxStatus) {
    setIsPreloader(true);
    localStorage.setItem("savedMovieRequest", JSON.stringify(movieRequest));
    localStorage.setItem("savedCheckboxStatus", JSON.stringify(checkboxStatus));
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
    if (getLocalData()) {
      const localData = getLocalData();
      const movies = handleMovieResponse(
        savedMovies,
        localData.movieRequest,
        localData.checkboxStatus
      );
      setMovies(movies);
      setMovieRequest(localData.movieRequest);
      setCheckboxStatus(localData.checkboxStatus);
      setAllreadySearch(true);
    }
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
