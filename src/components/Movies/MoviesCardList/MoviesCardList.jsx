import "./MoviesCardList.css";

import { useLocation } from "react-router-dom";
import { initialMovie, savedMovies } from "../../../utils/constans";

// Components =>
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  const location = useLocation();

  return (
    <section className="movies-card-list">
      {location.pathname === "/movies" ? (
        <>
          <ul className="movies-card-list__container">
            {initialMovie.map((card) => (
              <MoviesCard key={card.id} card={card} />
            ))}
          </ul>
          <button className="movies-card-list__button hover">Ещё</button>
        </>
      ) : (
        <>
          <ul className="movies-card-list__container">
            {savedMovies.map((card) => (
              <MoviesCard key={card.id} card={card} />
            ))}
          </ul>
          <button className="movies-card-list__button hover">Ещё</button>
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
