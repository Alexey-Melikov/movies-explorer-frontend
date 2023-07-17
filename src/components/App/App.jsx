import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";

// Utils =>
import movieFilter from "../../utils/MovieFilter";
import { AuthProtectedRoute } from "../../utils/AuthProtectedRoute";
import { ProtectedRoute } from "../../utils/ProtectedRoute";

// Components =>
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ErrorPage from "../ErrorPage/ErrorPage";
import Movies from "../Movies/Movies";
import Profile from "../ProfileData/Profile/Profile";
import Register from "../ProfileData/Register/Register";
import Login from "../ProfileData/Login/Login";
import SavedMovies from "../SavedMovies/SavedMovies";

// Api =>
import * as mainApi from "../../utils/MainApi";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [errMessageRegister, setErrMessageRegister] = useState("");
  const [errMessageLogin, setErrMessageLogin] = useState("");
  const [profileReport, setProfileReport] = useState("");

  const navigate = useNavigate();
  const location = window.location.pathname;

  // Functions =>
  function handleRegister(name, email, password) {
    setErrMessageRegister("");
    mainApi
      .register(name, email, password)
      .then(() => {
        handleAuthorize(email, password);
      })
      .catch((err) => {
        console.log(err);
        setErrMessageRegister(err);
      });
  }

  function handleAuthorize(email, password) {
    setErrMessageLogin("");
    mainApi
      .authorize(email, password)
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          localStorage.setItem("JWT", res.token);
          navigate("/movies");
        }
      })
      .catch((err) => {
        console.log(err);
        setErrMessageLogin(err);
      });
  }

  function handleLikeMovie(movie) {
    const filteredMovie = movieFilter(movie);
    mainApi
      .handleApiSaveMovie(filteredMovie)
      .then((movie) => {
        setSavedMovies([movie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDeleteMovie(movie) {
    mainApi
      .handleApiDeleteMovie(movie._id)
      .then(() => {
        setSavedMovies((state) => state.filter((i) => i._id !== movie._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateCurrentUser(userInfo) {
    mainApi
      .updateUserInformation(userInfo)
      .then((userData) => {
        setCurrentUser(userData);
        setProfileReport("Данные были изменены");
      })
      .catch((err) => {
        console.log(err);
        setProfileReport(err);
      });
  }

  function handleSignOut() {
    setIsLoggedIn(false);
    localStorage.removeItem("JWT");
    localStorage.removeItem("checkboxStatus");
    localStorage.removeItem("beatfilm-movies");
    localStorage.removeItem("movieRequest");
    localStorage.removeItem("movies");
    localStorage.removeItem("savedCheckboxStatus");
    localStorage.removeItem("savedMovieRequest");
    navigate("/");
  }
  //Token check =>
  useEffect(() => {
    const jwt = localStorage.getItem("JWT");
    if (!jwt) {
      return;
    }
    setIsLoggedIn(true);
    navigate(location);
    mainApi
      .getContent(jwt)
      .then((res) => {
        if (res) {
          setCurrentUser(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [navigate, location]);

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([mainApi.getUserInformation(), mainApi.getSavedMovies()])
        .then(([userData, moviesData]) => {
          setCurrentUser(userData);
          setSavedMovies(
            moviesData.filter((movie) => movie.owner === userData._id).reverse()
          );
        })
        .catch((err) => console.log(err));
    }
  }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header loggedIn={isLoggedIn} />
              <Main />
              <Footer />
            </>
          }
        />

        <Route path="*" element={<ErrorPage />} />

        <Route
          path="/movies"
          element={
            <ProtectedRoute
              path="/movies"
              element={Movies}
              loggedIn={isLoggedIn}
              handleLikeMovie={handleLikeMovie}
              handleDeleteMovie={handleDeleteMovie}
              savedMovies={savedMovies}
            ></ProtectedRoute>
          }
        />

        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute
              path="/saved-movies"
              element={SavedMovies}
              loggedIn={isLoggedIn}
              savedMovies={savedMovies}
              handleDeleteMovie={handleDeleteMovie}
            ></ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute
              path="/profile"
              element={Profile}
              loggedIn={isLoggedIn}
              handleSignOut={handleSignOut}
              handleUpdateCurrentUser={handleUpdateCurrentUser}
              profileReport={profileReport}
            ></ProtectedRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <AuthProtectedRoute
              element={Register}
              errMessageRegister={errMessageRegister}
              handleRegister={handleRegister}
              loggedIn={isLoggedIn}
            ></AuthProtectedRoute>
          }
        />

        <Route
          path="/signin"
          element={
            <AuthProtectedRoute
              element={Login}
              errMessageLogin={errMessageLogin}
              handleAuthorize={handleAuthorize}
              loggedIn={isLoggedIn}
            ></AuthProtectedRoute>
          }
        />
      </Routes>
    </CurrentUserContext.Provider>
  );
}
export default App;
