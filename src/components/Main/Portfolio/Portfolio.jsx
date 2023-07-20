import "./Portfolio.css";
import portfolioArrow from "../../../images/logo/portfolio-arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__pages">
        <li className="portfolio__page">
          <a
            href="https://github.com/Alexey-Melikov/how-to-learn"
            target="_blank"
            rel="noreferrer"
            className="portfolio__link hover"
          >
            Статичный сайт
          </a>
          <a
            href="https://github.com/Alexey-Melikov/how-to-learn"
            className="portfolio__link-icon hover"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="portfolio__img"
              alt="Ссылка на сайт"
              src={portfolioArrow}
            ></img>
          </a>
        </li>
        <li className="portfolio__page">
          <a
            href="https://github.com/Alexey-Melikov/russian-travel"
            target="_blank"
            rel="noreferrer"
            className="portfolio__link hover"
          >
            Адаптивный сайт
          </a>
          <a
            href="https://github.com/Alexey-Melikov/russian-travel"
            className="portfolio__link-icon hover"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="portfolio__img"
              alt="Ссылка на сайт"
              src={portfolioArrow}
            ></img>
          </a>
        </li>
        <li className="portfolio__page">
          <a
            href="https://github.com/Alexey-Melikov/react-mesto-api-full-gha"
            target="_blank"
            rel="noreferrer"
            className="portfolio__link hover"
          >
            Одностраничное приложение
          </a>
          <a
            href="https://github.com/Alexey-Melikov/react-mesto-api-full-gha"
            className="portfolio__link-icon hover"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="portfolio__img"
              alt="Ссылка на сайт"
              src={portfolioArrow}
            ></img>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
