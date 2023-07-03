import "./SearchForm.css";

// Components =>
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search-film">
      <form action="#" className="search-film__form">
        <input
          className="search-film__input"
          name="search-film__input"
          id="search-film__input"
          type="search"
          placeholder="Фильм"
          required
        ></input>
        <button type="submit" className="search-film__button hover">
          Найти
        </button>
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
