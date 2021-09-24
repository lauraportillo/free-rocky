// React
import { Link } from 'react-router-dom';
// Components
import ClueHeaderEn from './ClueHeaderEn';
import Input from './Input';
import PhotoList from './PhotoList';
import NextButtonEn from './NextButtonEn';
import ResetButtonEn from './ResetButtonEn';
import FooterBlack from './FooterBlack';
// Styles
import '../stylesheets/Clue01.scss';

const Clue01En = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };

  return (
    <div className="containerClue01">
      <ClueHeaderEn />
      <main className="containerMainClue01">
        <div className="clue01">
          <PhotoList password={props.password} photos={props.photos} />
          <div className="clue01__text">
            <h2 className="clue01__title">1 The temple</h2>
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
                placeholder="  enter the clue..."
                value={props.clue01}
              />
              <ResetButtonEn handleReset={props.handleReset} />
            </div>
            <NextButtonEn
              handleInput={props.handleInput}
              input={props.clue01}
              password={props.password[0]}
              route={props.route[0]}
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
        </div>
      </main>
      <FooterBlack />
    </div>
  );
};

export default Clue01En;
