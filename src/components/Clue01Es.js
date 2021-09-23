// React
import { Link } from 'react-router-dom';
// Components
import ClueHeaderEs from './ClueHeaderEs';
import Input from './Input';
import PhotoList from './PhotoList';
import NextButton from './NextButton';
import ResetButton from './ResetButton';
import FooterBlack from './FooterBlack';
// Styles
import '../stylesheets/Clue01.scss';

const Clue01Es = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };

  return (
    <div className="containerClue01">
      <ClueHeaderEs />
      <main className="containerMainClue01">
        <div className="clue01">
          <PhotoList password={props.password} photos={props.photos} />
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
            />
          </form>

          <nav className="clue01Nav">
            <ul className="clue01Nav__menu">
              <li>
                <Link to="/homeEs" className="clue01Nav__menu--item">
                  Inicio
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

export default Clue01Es;
