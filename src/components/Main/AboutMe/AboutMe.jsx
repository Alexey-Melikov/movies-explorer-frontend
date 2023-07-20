import "./AboutMe.css";
import initialStudent from "../../../images/pictures/initial-student.svg";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title-student">Студент</h2>
      <div className="about-me__container-info">
        <h2 className="about-me__title">Виталий</h2>
        <h3 className="about-me__subtitle">Фронтенд-разработчик, 30 лет</h3>
        <p className="about-me__description">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <a
          className="about-me__link hover"
          href="https://github.com/Alexey-Melikov"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <img
          className="about-me__img"
          src={initialStudent}
          alt="Фото студента"
        />
      </div>
    </section>
  );
}
export default AboutMe;
