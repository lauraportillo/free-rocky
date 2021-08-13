// React
import { Link } from 'react-router-dom';
// Components
import Header from './Header';
import Footer from './Footer';
// Styles
import '../stylesheets/Game.scss';
const GameEs = (props) => {
  return (
    <>
      <Header />
      <main className="game">
        <h1 className="game__title">the game</h1>

        <ul className="game__lang">
          <li className="game__lang--en">
            <Link to="/gameEn" title="english">
              En
            </Link>
          </li>
          <li className="game__lang--item">|</li>
          <li className="game__lang--es">
            <Link to="/gameEs" title="español">
              Es
            </Link>
          </li>
        </ul>

        <section className="game__description">
          <p className="game__description--p">
            <span className="bold">Lorem </span>
            TEXTO EN CASTELLANO
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GameEs;
