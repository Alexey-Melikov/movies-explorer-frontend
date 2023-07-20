import "./Header.css";

import headerLogoMovie from "../../images/logo/header-logo-movie.svg";
import { Link } from "react-router-dom";

// Components =>
import BurgerMenu from "./BurgerMenu/BurgerMenu";

function Header({ loggedIn }) {
  return (
    <header className={!loggedIn ? "header" : "header header-theme-dark"}>
      {!loggedIn ? (
        <div className="header__navigation-auth">
          <Link className="header__logo-auth hover" to={"/"}></Link>
          <nav className="header__nav-auth">
            <Link to={"/signup"} className="header__link-auth hover">
              Регистрация
            </Link>
            <Link to={"/signin"} className="header__button-auth hover">
              Войти
            </Link>
          </nav>
        </div>
      ) : (
        <div className="header__navigation-movie">
          <Link className="header__logo-auth hover" to={"/"}></Link>
          <Link
            to={"/movies"}
            className="header__navigation-movie-link hover invisible"
          >
            Фильмы
          </Link>
          <Link
            to={"/saved-movies"}
            className="header__navigation-movie-link hover invisible"
          >
            Сохранённые фильмы
          </Link>
          <Link
            to={"/profile"}
            className="header__navigation-movie-button hover invisible"
          >
            Аккаунт
            <img
              className="header__navigation-movie-img invisible"
              alt="Логотип аккаунта"
              src={headerLogoMovie}
            ></img>
          </Link>
          <BurgerMenu />
        </div>
      )}
    </header>
  );
}

export default Header;
