// React
import { Link } from 'react-router-dom';
// Components
import ClueHeader from './ClueHeader';
import Footer from './Footer';
// Styles
import '../stylesheets/Clue01.scss';

const Clue01 = (props) => {
  return (
    <>
      <ClueHeader />
      <main className="clue01">
        <h1 className="clue01__title">primera</h1>
        <form className="clue01__form">
          <input className="clue01__form--input" type="text" name="name" id="name" placeholder="enter your answer..." />
          <Link to="/clue02">
            <button className="clue01__form--btn">Play</button>
          </Link>
        </form>
        <nav className="clue01Nav">
          <ul className="clue01Nav__menu">
            <li>
              <Link to="/" className="clue01Nav__menu--item">
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </main>
      <Footer />
    </>
  );
};

export default Clue01;

// QUÉ TENGO QUE HACER:
// recoger lo que escriba el usuario en el input
// si coincide con la clave, entonces habilitar el botón que te lleva a la siguiente clave
