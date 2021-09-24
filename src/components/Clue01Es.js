// React
import { Link } from 'react-router-dom';
// Components
import ClueHeaderEs from './ClueHeaderEs';
import Input from './Input';
import PhotoList from './PhotoList';
import NextButtonEs from './NextButtonEs';
import ResetButtonEs from './ResetButtonEs';
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
          <div className="clue01__text">
            <h2 className="clue01__title">1 El templo</h2>
            <p className="clue01__text--para">
              This image was taken by Rocky's owners on the first big trip they made together.
            </p>
            <p className="clue01__text--para">
              They went to a very exotic country where there was a mysterious temple that they loved.
            </p>
            <p className="clue01__text--para">
              Find in the images the letters that will lead you to discover the name of the temple.
            </p>
          </div>
          <form onSubmit={handleForm} className="clue01__form">
            <div>
              <Input
                handleInput={props.handleInput}
                clue01={props.clue01}
                className="clue01__form--input"
                type="text"
                name="clue01"
                id="clue01"
                placeholder="introduce la clave..."
                value={props.clue01}
              />
              <ResetButtonEs handleReset={props.handleReset} />
            </div>
            <NextButtonEs
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
