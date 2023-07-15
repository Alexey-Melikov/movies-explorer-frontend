import "./Login.css";

import { Link } from "react-router-dom";
import { useFormValidation } from "../../../utils/useFormValidation";
import { REGEX_EMAIL } from "../../../utils/constans";

function Login({ handleAuthorize, errMessageLogin }) {
  const { values, errors, isValid, handleChange } = useFormValidation();

  function handleSubmit(e) {
    e.preventDefault();
    handleAuthorize(values.email, values.password);
  }
  function spanClasName(name) {
    return `login__input-span ${
      errors[name] ? "login__input-span-active" : ""
    }`;
  }

  return (
    <main className="login">
      <div className="login__container-type-greetings">
        <Link className="header__logo-auth hover" to={"/"}></Link>
        <h2 className="login__title">Рады видеть!</h2>
      </div>
      <form
        className="login__form"
        noValidate
        onSubmit={handleSubmit}
        action="#"
      >
        <fieldset className="login__fieldset">
          <label className="login__label">
            <span className="login__span">E-mail</span>
            <input
              type="email"
              name="email"
              id="loginEmail"
              placeholder="E-mail"
              autoComplete="off"
              minLength="5"
              maxLength="40"
              pattern={REGEX_EMAIL}
              required
              className="login__input"
              onChange={handleChange}
              value={values["email"] ?? ""}
            />
            <span className={spanClasName("email")}>{errors["email"]}</span>
          </label>

          <label className="login__label">
            <span className="login__span">Пароль</span>
            <input
              type="password"
              name="password"
              id="loginPassword"
              placeholder="Пароль"
              autoComplete="off"
              minLength="5"
              maxLength="40"
              required
              className="login__input login__input_type_password"
              onChange={handleChange}
              value={values["password"] ?? ""}
            />
            <span className={spanClasName("password")}>
              {errors["password"]}
            </span>
          </label>
          <span className="login__span-submit-error">{errMessageLogin}</span>
          <button
            type="submit"
            disabled={!isValid}
            className={
              isValid
                ? "login__button hover login__button-active"
                : "login__button hover"
            }
          >
            Войти
          </button>
        </fieldset>
      </form>
      <section className="login__container">
        <p className="login__subtitle">Ещё не зарегистрированы?</p>
        <Link to={"/signup"} className="login__link hover">
          Регистрация
        </Link>
      </section>
    </main>
  );
}

export default Login;
