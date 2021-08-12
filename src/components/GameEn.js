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
        </section>

        <ul className="menu">
          <li className="menu__item">
            <a className="menu__item--icon" href="http://bilfrok.com/" target="_blank" rel="noopener noreferrer">
              Luis Yrisarry
            </a>
          </li>
          <li className="menu__item">
            <a
              className="menu__item--icon"
              href="https://www.artstation.com/bilfrok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-artstation" aria-hidden="true"></i>
            </a>
          </li>
          <li className="menu__item">
            <a
              className="menu__item--icon"
              href="https://www.behance.net/Bilfrok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-behance" alt="behance icon"></i>
            </a>
          </li>
          <li className="menu__item">
            <a
              className="menu__item--icon"
              href="https://www.linkedin.com/in/bilfrok/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin" alt="linkedin icon"></i>
            </a>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default GameEn;
