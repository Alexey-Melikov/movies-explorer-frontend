import "./MoviesCard.css";

import { useState } from "react";

function MoviesCard({ card }) {
  const [buttonClassName, setButtonClassName] = useState(
    "movies-card__button hover"
  );

  function getDuration(card) {
    const hours = Math.floor(card.duration / 60);
    const minutes = Math.floor(card.duration - hours * 60);
    return `${hours}ч ${minutes}м`;
  }

  function handleSaveMovie() {
    buttonClassName.includes("movies-card__saved")
      ? setButtonClassName("movies-card__button hover")
      : setButtonClassName("movies-card__button hover movies-card__saved");
  }
  return (
    <>
      <li className="movies-card">
        <img
          className="movies-card__img"
          alt={card.nameRU}
          src={`https://api.nomoreparties.co/${card.image.url}`}
        ></img>
        <button
          aria-label="Сохранить"
          type="button"
          onClick={handleSaveMovie}
          className={buttonClassName}
        >
          Сохранить
        </button>
        <div className="movies-card__container">
          <h2 className="movies-card__title">{card.nameRU}</h2>
          <div className="movies-card__time">{getDuration(card)}</div>
        </div>
      </li>
    </>
  );
}

export default MoviesCard;