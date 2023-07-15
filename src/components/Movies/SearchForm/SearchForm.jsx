import "./SearchForm.css";

import { useEffect, useState } from "react";

// Components =>
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

function SearchForm({
  handleMovieSearch,
  movieRequest,
  setMovieRequest,
  checkboxStatus,
  setCheckboxStatus,
  handleCheckboxSearch,
}) {
  const [isFormValid, setIsformValid] = useState(false);
  const [spanClassname, setSpanclassName] = useState("search-film__error-span");

  function handleSubmit(e) {
    e.preventDefault();

    if (isFormValid) {
      setSpanclassName("search-film__error-span");
      handleMovieSearch(movieRequest, checkboxStatus);
    } else {
      setSpanclassName("search-film__error-span active");
    }
  }

  useEffect(() => {
    movieRequest.length > 0 ? setIsformValid(true) : setIsformValid(false);
  }, [movieRequest]);

  function handleChange(e) {
    setMovieRequest(e.target.value);
  }

  function handleCheckboxClick() {
    setCheckboxStatus(!checkboxStatus);
    handleCheckboxSearch(checkboxStatus);
  }

  return (
    <section className="search-film">
      <form
        action="#"
        onSubmit={handleSubmit}
        noValidate
        className="search-film__form"
      >
        <input
          className="search-film__input"
          name="search-film__input"
          id="search-film__input"
          type="search"
          placeholder="Фильм"
          minLength="1"
          maxLength="30"
          onChange={handleChange}
          required
          value={movieRequest}
        ></input>
        <button type="submit" className="search-film__button hover">
          Найти
        </button>
      </form>
      <span className={spanClassname}>Нужно ввести ключевое слово</span>
      <FilterCheckbox
        handleCheckboxClick={handleCheckboxClick}
        checkboxStatus={checkboxStatus}
      />
    </section>
  );
}

export default SearchForm;
