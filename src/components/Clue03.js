// React
import { Link } from 'react-router-dom';
// Components
import ClueHeaderEn from './ClueHeaderEn';
import Input from './Input';
import NextButtonEn from './NextButtonEn';
import ResetButtonEn from './ResetButtonEn';
import FooterBlack from './FooterBlack';
// Styles
import '../stylesheets/Clue03.scss';

const Clue03 = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };

  return (
    <div className="containerClue03">
      <ClueHeaderEn />
      <main className="containerMainClue03">
        <div className="clue03">
          <div className="clue03__text">
            <h2 className="clue03__title">3 Tercera Pista</h2>
            <p className="clue03__text--para">Paragraph with instructions</p>
          </div>
          <form onSubmit={handleForm} className="clue03__form">
            <div>
              <Input
                handleInput={props.handleInput}
                clue03={props.clue03}
                className="clue03__form--input"
                type="text"
                name="clue03"
                id="clue03"
                placeholder="  enter the clue..."
                value={props.clue03}
              />
              <ResetButtonEn handleReset={props.handleReset} />
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
                <Link to="/clue02En" className="clue03Nav__menu--item">
                  Go back
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </main>
      <FooterBlack />
    </div>
  );
};

export default Clue03;
