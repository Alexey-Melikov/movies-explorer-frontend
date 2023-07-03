import { Route, Routes } from "react-router-dom";

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

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header loggedIn={false} />
            <Main />
            <Footer />
          </>
        }
      />

      <Route path="*" element={<ErrorPage />} />

      <Route
        path="/movies"
        element={
          <>
            <Header loggedIn={true} /> <Movies /> <Footer />
          </>
        }
      />

      <Route
        path="/saved-movies"
        element={
          <>
            <Header loggedIn={true} /> <SavedMovies /> <Footer />
          </>
        }
      />

      <Route
        path="/profile"
        element={
          <>
            <Header loggedIn={true} /> <Profile />
          </>
        }
      />

      <Route path="/signup" element={<Register />} />

      <Route path="/signin" element={<Login />} />
    </Routes>
  );
}
export default App;
