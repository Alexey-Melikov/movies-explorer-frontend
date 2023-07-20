import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <ul className="footer__items">
        <li className="footer__item">© 2023</li>
        <li className="footer__item">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://practicum.yandex.ru/"
            className="footer__item-link hover"
          >
            Яндекс.Практикум
          </a>
        </li>
        <li className="footer__item">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/"
            className="footer__item-link hover"
          >
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
