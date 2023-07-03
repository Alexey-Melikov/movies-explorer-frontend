import "./Register.css";

import { Link } from "react-router-dom";
import { useFormValidation } from "../../../utils/useFormValidation";

function Register() {
  const { values, errors, isValid, handleChange } = useFormValidation();

  function handleSubmit(e) {
    e.preventDefault();
  }
  function spanClasName(name) {
    return `register__input-span ${
      errors[name] ? "register__input-span-active" : ""
    }`;
  }

  return (
    <main className="register">
      <div className="register__container-greetings">
        <Link className="header__logo-auth hover" to={"/"}></Link>
        <h2 className="register__title">Добро пожаловать!</h2>
      </div>
      <form
        className="register__form"
        action="#"
        noValidate
        onSubmit={handleSubmit}
      >
        <fieldset className="register__fieldset">
          <label className="register__label">
            <span className="register__span">Имя</span>
            <input
              className="register__input"
              type="text"
              name="name"
              id="name"
              placeholder="Имя"
              autoComplete="off"
              minLength="5"
              maxLength="40"
              required
              value={values["name"] ?? ""}
              onChange={handleChange}
            />
            <span className={spanClasName("name")}>{errors["name"]}</span>
          </label>

          <label className="register__label">
            <span className="register__span">E-mail</span>
            <input
              className="register__input"
              type="email"
              name="email"
              id="registerEmail"
              placeholder="E-mail"
              autoComplete="off"
              minLength="5"
              maxLength="40"
              required
              value={values["email"] ?? ""}
              onChange={handleChange}
            />
            <span className={spanClasName("email")}>{errors["email"]}</span>
          </label>

          <label className="register__label">
            <span className="register__span">Пароль</span>
            <input
              className="register__input register__input_type_password"
              type="password"
              name="password"
              id="registerPassword"
              placeholder="Пароль"
              autoComplete="off"
              minLength="5"
              maxLength="40"
              required
              value={values["password"] ?? ""}
              onChange={handleChange}
            />
            <span className={spanClasName("password")}>
              {errors["password"]}
            </span>
          </label>
          <button
            type="submit"
            disabled={!isValid}
            className={
              isValid
                ? "register__button hover register__button-active"
                : "register__button hover"
            }
          >
            Зарегистрироваться
          </button>
        </fieldset>
      </form>
      <section className="register__container">
        <p className="register__subtitle">Уже зарегистрированы?</p>
        <Link to={"/signin"} className="register__link hover">
          Войти
        </Link>
      </section>
    </main>
  );
}

export default Register;
