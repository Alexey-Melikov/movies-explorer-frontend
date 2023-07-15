import "./FilterCheckbox.css";

function FilterCheckbox({ handleCheckboxClick,checkboxStatus }) {
  return (
    <section className="filter-check-box">
      <p className="filter-check-box__description">Короткометражки</p>
      <input
        type="checkbox"
        name="filter-check-box__input"
        id="filter-check-box__input"
        className="filter-check-box__input hover"
        role="switch"
        checked={checkboxStatus}
        onChange={handleCheckboxClick}
      ></input>
    </section>
  );
}

export default FilterCheckbox;
