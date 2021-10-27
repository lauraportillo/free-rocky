// Components
import HeaderEn from './english/HeaderEn';
import Footer from './Footer';
// Styles
import '../stylesheets/ComingSoon.scss';

const ComingSoon = () => {
  return (
    <div className="containerSoon">
      <HeaderEn />
      <main className="containerMainSoon">
        <div className="soon">
          <section className="soon__titleEs">
            <h2>Gracias por jugar!</h2>
            <h2>Más pistas próximamente...</h2>
          </section>
          <section className="soon__titleEn">
            <h2>Thanks for playing!</h2>
            <h2>More clues coming soon ...</h2>
          </section>
          <section className="soon__title">
            <h2 className="animate__animated  animate__bounceInUp">♡</h2>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ComingSoon;
