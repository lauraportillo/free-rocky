// Components
import HeaderEn from './english/HeaderEn';
import Footer from './Footer';
// Styles
import '../stylesheets/ComingSoon.scss';

const ComingSoon = () => {
  return (
    <div className="containerRocky">
      <HeaderEn />
      <main>
        <section>
          <h2>Gracias por jugar!</h2>
          <h2>Más pistas próximamente...</h2>
        </section>
        <section>
          <h2>Thanks for playing!</h2>
          <h2>More clues coming soon ...</h2>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ComingSoon;
