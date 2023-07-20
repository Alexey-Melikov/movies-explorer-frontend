import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб&#8209;разработки.
        </h1>
        <p className="promo__description">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <a href="#about-project" className="promo__button hover">
          Узнать больше
        </a>
      </div>
      <div className="promo__wrapper"></div>
    </section>
  );
}

export default Promo;
