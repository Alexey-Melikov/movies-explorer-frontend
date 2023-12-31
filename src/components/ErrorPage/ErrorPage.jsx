import "./ErrorPage.css";

import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <section className="error-page">
      <h1 className="error-page__title">404</h1>
      <p className="error-page__subtitle">Страница не найдена</p>
      <Link to={-1} className="error-page__button hover">
        Назад
      </Link>
    </section>
  );
}

export default ErrorPage;
