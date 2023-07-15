import { useState, useContext, useEffect } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../../context/CurrentUserContext";
import { useFormValidation } from "../../../utils/useFormValidation";
import { REGEX_EMAIL, REGEX_NAME } from "../../../utils/constans";

// Components =>
import Header from "../../Header/Header";

function Profile({
  handleSignOut,
  loggedIn,
  handleUpdateCurrentUser,
  profileReport,
}) {
  const [containerType, setContainerType] = useState("introductory");
  const [isDataDifferent, setIsDataDifferent] = useState(false);

  const currentUser = useContext(CurrentUserContext);
  const { values, errors, isValid, handleChange } = useFormValidation();

  function onSubmitProfileForm(e) {
    e.preventDefault();
    handleUpdateCurrentUser({
      name: values.profileName,
      email: values.profileEmail,
    });
  }

  function hancdleChangeContainerType() {
    setContainerType("editing");
  }

  function spanClasName(name) {
    return `profile__input-span ${
      errors[name] ? "profile__input-span-active" : ""
    }`;
  }

  useEffect(() => {
    currentUser.name === values.profileName
      ? setIsDataDifferent(true)
      : setIsDataDifferent(false);
  }, [values, currentUser]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <form
          className="profile__form"
          name="profile__form"
          action="#"
          onSubmit={onSubmitProfileForm}
          id="profile__form"
          noValidate
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
                value={values["profileName"] || ""}
                placeholder={currentUser.name}
                id="profile__input_type_name"
                name="profileName"
                pattern={REGEX_NAME}
                type="text"
                onChange={handleChange}
              />
            </label>
            <span className={spanClasName("profileName")}>
              {errors["profileName"]}
            </span>

            <label
              className="profile__label"
              htmlFor="profile__input_type_email"
            >
              <span className="profile__subtitle">E-mail</span>
              <input
                className="profile__input profile__input_type_email"
                minLength="2"
                maxLength="30"
                required
                pattern={REGEX_EMAIL}
                disabled={containerType === "introductory" ? true : false}
                value={values["profileEmail"] || ""}
                placeholder={currentUser.email}
                id="profile__input_type_email"
                name="profileEmail"
                type="email"
                onChange={handleChange}
              />
            </label>
            <span className={spanClasName("profileEmail")}>
              {errors["profileEmail"]}
            </span>
          </fieldset>
          <span
            className={
              profileReport === "Данные были изменены"
                ? "profile__span-type-report"
                : "profile__span-type-report profile__span-type-report-error"
            }
          >
            {profileReport}
          </span>
          {containerType === "introductory" ? (
            <div className="profile__container">
              <div
                onClick={hancdleChangeContainerType}
                className="profile__button-type_submit hover"
              >
                Редактировать
              </div>
              <Link
                to={"/"}
                onClick={handleSignOut}
                className="profile__button-type_exit hover"
              >
                Выйти из аккаунта
              </Link>
            </div>
          ) : (
            <div className="profile__container">
              <button
                form="profile__form"
                type="submit"
                className={
                  !isValid || isDataDifferent
                    ? "profile__button_type_submit-editing hover"
                    : "profile__button_type_submit-editing hover profile__button_type_submit-editing-active "
                }
                disabled={!isValid || isDataDifferent}
              >
                Сохранить
              </button>
            </div>
          )}
        </form>
      </main>
    </>
  );
}

export default Profile;
