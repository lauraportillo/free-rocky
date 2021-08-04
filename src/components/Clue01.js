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
            <Input handleInput={props.handleInput} input={props.input} className="clue01__form--input" />
            <ResetButton handleReset={props.handleReset} />
          </div>

          <NextButton
            //IMPROVE: la clave tiene que ser la de clue 01 y pasar por props a next
            handleInput={props.handleInput}
            input={props.input}
            password={props.password}
            hiddenClass={props.hiddenClass}
          />
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
