import "./MoviesCard.css";

import { useLocation } from "react-router-dom";

function MoviesCard({
  card,
  handleLikeMovie,
  handleDeleteMovie,
  savedMovies,
  cardTypeSaved,
}) {
  const location = useLocation();

  function getDuration(card) {
    const hours = Math.floor(card.duration / 60);
    const minutes = Math.floor(card.duration - hours * 60);
    return `${hours}ч ${minutes}м`;
  }

  function handleSaveMovie() {
    if (cardTypeSaved) {
      handleDeleteMovie(
        savedMovies.filter((item) => item.movieId === card.id)[0]
      );
    } else {
      handleLikeMovie(card);
    }
  }

  function handleRemoveMovie() {
    handleDeleteMovie(card);
  }

  return (
    <>
      <li className="movies-card">
        <a
          className="movies-card__link hover"
          target="_blank"
          rel="noreferrer"
          href={card.trailerLink}
        >
          <img
            className="movies-card__img"
            alt={card.nameRU}
            src={
              location.pathname === "/movies"
                ? `https://api.nomoreparties.co/${card.image.url}`
                : card.image
            }
          ></img>
        </a>
        {location.pathname === "/movies" ? (
          <button
            aria-label="Сохранить"
            type="button"
            onClick={handleSaveMovie}
            className={
              cardTypeSaved
                ? "movies-card__button hover movies-card__saved"
                : "movies-card__button hover"
            }
          >
            Сохранить
          </button>
        ) : (
          <button
            onClick={handleRemoveMovie}
            className="movies-card__button hover movies-card__delete"
            type="button"
            aria-label="Удалить"
          ></button>
        )}

        <div className="movies-card__container">
          <h2 className="movies-card__title">{card.nameRU}</h2>
          <div className="movies-card__time">{getDuration(card)}</div>
        </div>
      </li>
    </>
  );
}

export default MoviesCard;
