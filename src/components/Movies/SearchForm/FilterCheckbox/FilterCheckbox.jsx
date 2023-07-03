import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <section className="filter-check-box">
      <p className="filter-check-box__description">Короткометражки</p>
      <input
        type="checkbox"
        name="filter-check-box__input"
        id="filter-check-box__input"
        className="filter-check-box__input"
        role="switch"
      ></input>
    </section>
  );
}

export default FilterCheckbox;

