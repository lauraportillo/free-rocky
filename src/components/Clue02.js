// React
import { Link } from 'react-router-dom';
// Components
import ClueHeader from './ClueHeader';
import Input from './Input';
import NextButton from './NextButton';
import ResetButton from './ResetButton';
import Footer from './Footer';
// Styles
import '../stylesheets/Clue02.scss';

const Clue02 = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <>
      <ClueHeader />
      <main className="clue02">
        <h1 className="clue02__title">segunda</h1>
        <form onSubmit={handleForm} className="clue02__form">
          <div>
            <Input
              handleInput={props.handleInput}
              clue02={props.clue02}
              className="clue02__form--input"
              type="text"
              name="clue02"
              id="clue02"
              placeholder="enter the clue..."
              value={props.clue02}
            />
            <ResetButton handleReset={props.handleReset} />
          </div>

          <NextButton
            //IMPROVE: la clave tiene que ser la de clue 02 y pasar por props a next
            handleInput={props.handleInput}
            // clue02={props.clue02}
            input={props.clue02}
            password={props.password[1]}
            route={props.route[1]}
            hiddenClass={props.hiddenClass}
          />
        </form>

        <nav className="clue02Nav">
          <ul className="clue02Nav__menu">
            <li>
              <Link to="/" className="clue02Nav__menu--item">
                Home
              </Link>
            </li>
            <li className="clue02Nav__menu--item">|</li>
            <li>
              <Link to="/clue01" className="clue02Nav__menu--item">
                Go back
              </Link>
            </li>
          </ul>
        </nav>
      </main>
      <Footer />
    </>
  );
};

export default Clue02;
