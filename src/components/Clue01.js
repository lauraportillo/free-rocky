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
            <Input
              handleInput={props.handleInput}
              clue01={props.clue01}
              className="clue01__form--input"
              type="text"
              name="clue01"
              id="clue01"
              placeholder="enter the clue..."
              value={props.clue01}
            />
            <ResetButton handleReset={props.handleReset} />
          </div>

          <NextButton
            handleInput={props.handleInput}
            input={props.clue01}
            password={props.password[0]}
            route={props.route[0]}
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
