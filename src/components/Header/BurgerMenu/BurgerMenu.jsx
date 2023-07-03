import "./BurgerMenu.css";

import { useState } from "react";
import { Link } from "react-router-dom";

import headerLogoMovie from "../../../images/logo/header-logo-movie.svg";

function BurgerMenu() {
  const [isBurgerMenuOpenButton, setIsBurgerMenuOpenButton] = useState(
    "burger-menu__button"
  );

  const [isBurgerMenuOpenNav, setIsBurgerMenuOpenNav] = useState(
    "burger-menu__navigation"
  );

  function handleButtonOpen() {
    isBurgerMenuOpenButton.includes("burger-menu__button active")
      ? setIsBurgerMenuOpenButton("burger-menu__button") ||
        setIsBurgerMenuOpenNav("burger-menu__navigation")
      : setIsBurgerMenuOpenButton("burger-menu__button active") ||
        setIsBurgerMenuOpenNav("burger-menu__navigation active");
  }

  return (
    <section className="burger-menu">
      <button onClick={handleButtonOpen} className={isBurgerMenuOpenButton}>
        <span className="burger-menu__button-bar"></span>
        <span className="burger-menu__button-bar"></span>
        <span className="burger-menu__button-bar"></span>
      </button>
      <nav className={isBurgerMenuOpenNav}>
        <ul className="burger-menu__links">
          <Link
            to={"/"}
            onClick={handleButtonOpen}
            className="burger-menu__link hover"
          >
            Главная
          </Link>
          <Link
            to={"/movies"}
            onClick={handleButtonOpen}
            className="burger-menu__link hover"
          >
            Фильмы
          </Link>
          <Link
            to={"/saved-movies"}
            onClick={handleButtonOpen}
            className="burger-menu__link hover"
          >
            Сохранённые фильмы
          </Link>
          <Link
            onClick={handleButtonOpen}
            className="burger-menu__link-button hover"
          >
            Аккаунт
            <img
              className="header__navigation-movie-img "
              alt="Логотип аккаунта"
              src={headerLogoMovie}
            ></img>
          </Link>
        </ul>
      </nav>
    </section>
  );
}

export default BurgerMenu;
