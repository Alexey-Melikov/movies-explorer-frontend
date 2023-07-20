import "./AboutMe.css";
import initialStudent from "../../../images/pictures/initial-student.svg";
import mainPhoto from "../../../images/pictures/MainPhoto1.jpg";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title-student">Студент</h2>
      <div className="about-me__container-info">
        <h2 className="about-me__title">Алексей</h2>
        <h3 className="about-me__subtitle">Фронтенд-разработчик, 29 лет</h3>
        <p className="about-me__description">
          Я родился и живу в Санкт-Петербурну, закончил
          экономико-технологический институт, по специальности Технолог. Женат,
          детей нет. Я изучаю веб-разработку с 2022 года. Увлекаюсь фондовой
          биржей, люблю смотреть кино, слушать музыку.
        </p>
        <a
          className="about-me__link hover"
          href="https://github.com/Alexey-Melikov"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <img className="about-me__img" src={mainPhoto} alt="Фото студента" />
      </div>
    </section>
  );
}
export default AboutMe;
