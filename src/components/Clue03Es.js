// React
import { Link } from 'react-router-dom';
// Components
import ClueHeaderEs from './ClueHeaderEs';
import Input from './Input';
import NextButtonEs from './NextButtonEs';
import ResetButtonEs from './ResetButtonEs';
import FooterBlack from './FooterBlack';
// Styles
import '../stylesheets/Clue03.scss';

const Clue03Es = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };

  return (
    <div className="containerClue03">
      <ClueHeaderEs />
      <main className="containerMainClue03">
        <div className="clue03">
          <div className="clue03__text">
            <h2 className="clue03__title">3 Tercera Pista</h2>
            <p className="clue03__text--para">Párrafo con instrucciones</p>
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
                placeholder="  introduce la clave..."
                value={props.clue03}
              />
              <ResetButtonEs handleReset={props.handleReset} />
            </div>

            <NextButtonEs
              handleInput={props.handleInput}
              input={props.clue03}
              password={props.password[2]}
              route={props.route[5]}
            />
          </form>

          <nav className="clue03Nav">
            <ul className="clue03Nav__menu">
              <li>
                <Link to="/homeEs" className="clue03Nav__menu--item">
                  Inicio
                </Link>
              </li>
              <li className="clue03Nav__menu--item">|</li>
              <li>
                <Link to="/clue02Es" className="clue03Nav__menu--item">
                  Volver
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

export default Clue03Es;
