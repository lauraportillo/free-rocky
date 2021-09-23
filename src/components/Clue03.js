// React
import { Link } from 'react-router-dom';
// Components
import ClueHeaderEn from './ClueHeaderEn';
import Input from './Input';
import NextButtonEn from './NextButtonEn';
import ResetButton from './ResetButton';
import Footer from './Footer';
// Styles
import '../stylesheets/Clue03.scss';

const Clue03 = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };

  return (
    <>
      <ClueHeaderEn />
      <main className="clue03">
        <h1 className="clue03__title">tercera</h1>
        <form onSubmit={handleForm} className="clue03__form">
          <div>
            <Input
              handleInput={props.handleInput}
              clue03={props.clue03}
              className="clue03__form--input"
              type="text"
              name="clue03"
              id="clue03"
              placeholder="enter the clue..."
              value={props.clue03}
            />
            <ResetButton handleReset={props.handleReset} />
          </div>

          <NextButtonEn
            handleInput={props.handleInput}
            input={props.clue03}
            password={props.password[2]}
            route={props.route[2]}
          />
        </form>

        <nav className="clue03Nav">
          <ul className="clue03Nav__menu">
            <li>
              <Link to="/" className="clue03Nav__menu--item">
                Home
              </Link>
            </li>
            <li className="clue03Nav__menu--item">|</li>
            <li>
              <Link to="/clue02" className="clue03Nav__menu--item">
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

export default Clue03;
