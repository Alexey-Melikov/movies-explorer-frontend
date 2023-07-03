import { useState } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";

function Profile() {
  const [name, setName] = useState("Виталий");
  const [email, setEmail] = useState("pochta@yandex.ru");
  const [containerType, setContainerType] = useState("introductory");

  function handleOnchangeInputProfile(e) {
    e.target.name === "profileName"
      ? setName(e.target.value)
      : setEmail(e.target.value);
  }

  function onSubmitProfileForm(e) {
    e.preventDefault();
  }

  function hancdleChangeContainerType() {
    setContainerType("editing");
  }

  return (
    <main className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form
        className="profile__form"
        name="profile__form"
        action="#"
        onSubmit={onSubmitProfileForm}
        id="profile__form"
      >
        <fieldset className="profile__fieldset">
          <label
            className="profile__label"
            disabled
            htmlFor="profile__input_type_name"
          >
            <span className="profile__subtitle">Имя</span>
            <input
              className="profile__input profile__input_type_name"
              minLength="2"
              maxLength="30"
              required
              disabled={containerType === "introductory" ? true : false}
              value={name}
              placeholder="Имя"
              id="profile__input_type_name"
              name="profileName"
              type="text"
              onChange={handleOnchangeInputProfile}
            />
          </label>

          <label className="profile__label" htmlFor="profile__input_type_email">
            <span className="profile__subtitle">E-mail</span>
            <input
              className="profile__input profile__input_type_email"
              minLength="2"
              maxLength="30"
              required
              disabled={containerType === "introductory" ? true : false}
              value={email}
              placeholder="Почта"
              id="profile__input_type_email"
              name="profileEmail"
              type="email"
              onChange={handleOnchangeInputProfile}
            />
          </label>
        </fieldset>
        {containerType === "introductory" ? (
          <div className="profile__container">
            <button
              onClick={hancdleChangeContainerType}
              className="profile__button-type_submit hover"
            >
              Редактировать
            </button>
            <Link to={"/"} className="profile__button-type_exit hover">
              Выйти из аккаунта
            </Link>
          </div>
        ) : (
          <div className="profile__container">
            <button
              form="profile__form"
              type="submit"
              className="profile__button_type_submit-editing hover"
            >
              Сохранить
            </button>
          </div>
        )}
      </form>
    </main>
  );
}

export default Profile;
