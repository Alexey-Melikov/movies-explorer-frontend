import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project">
      <div className="about-project__container">
        <h2 className="about-project__title" id="about-project">
          О проекте
        </h2>
        <ul className="about-project__description">
          <li className="about-project__description-container">
            <h3 className="about-project__description-title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project__description-paragraph">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </li>
          <li className="about-project__description-container">
            <h3 className="about-project__description-title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__description-paragraph">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>

        <ul className="about-project__time">
          <li className="about-project__container-back-end">
            <div className="about-project__scale-back-end">1 неделя</div>
            <p className="about-project__paragraph-back-end">Back-end</p>
          </li>
          <li className="about-project__container-front-end">
            <div className="about-project__scale-front-end">4 недели</div>
            <p className="about-project__paragraph-front-end">Front-end</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutProject;
