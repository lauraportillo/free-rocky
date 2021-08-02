// React
import { Link } from 'react-router-dom';
// Components
import ClueHeader from './ClueHeader';
import Input from './Input';
import NextButton from './NextButton';
import ResetButton from './ResetButton';
import Footer from './Footer';
// Styles
import '../stylesheets/Clue01.scss';

const Clue01 = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };

  return (
    <>
      <ClueHeader />
      <main className="clue01">
        <h1 className="clue01__title">primera</h1>
        <form onSubmit={handleForm} className="clue01__form">
          <div>
            <Input handleClue01={props.handleClue01} clue01={props.clue01} className="clue01__form--input" />
            <ResetButton handleReset={props.handleReset} />
          </div>
          <Link to="/clue02">
            <NextButton clue01={props.clue01} hiddenClass={props.hiddenClass} />
            {/* <NextButton handlePassword={props.handlePassword} clue01={props.clue01} hiddenClass={props.hiddenClass} /> */}
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
