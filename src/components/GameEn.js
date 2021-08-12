// React
import { Link } from 'react-router-dom';

// Components
import Header from './Header';
import Footer from './Footer';
// Styles
import '../stylesheets/Game.scss';
const GameEn = (props) => {
  return (
    <>
      <Header />
      <main className="game">
        <h1 className="game__title">the game</h1>

        <ul className="game__lang">
          <li className="game__lang--en">
            <Link to="/aboutEn">En</Link>
          </li>
          <li className="game__lang--item">|</li>
          <li className="game__lang--es">
            <Link to="/aboutEs">Es</Link>
          </li>
        </ul>

        <section className="game__description">
          <p className="game__description--p">
            Rocky is not a regular dog.It is a very special dog. It is a Bulldog with a beautiful face, like a cuddly
            teddy bear. The perfect dog that everyone would want to live with.
          </p>
          <p className="game__description--p">
            Rocky seems completely real, however he is not flesh and blood, he is a 3d modelled dog, the work of the
            great artist Luis Yrisarry Labadía.
          </p>
          <p className="game__description--p">
            Luis is a 3d Artist and Art Director specialized in Characters and Digital Sculpture, with such an
            incredible talent.
          </p>
          <p className="game__description--p">
            Thank you Luis for lend me Rocky as protagonist of this great adventure!
          </p>
          Luis Yrisarry Labadía
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GameEn;
