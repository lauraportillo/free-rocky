// React
import { Link } from 'react-router-dom';
// Components
import ClueHeaderEs from './ClueHeaderEs';
import Input from '../Input';
import NextButtonEs from './NextButtonEs';
import ResetButtonEs from './ResetButtonEs';
import FooterBlack from '../FooterBlack';
// Styles
import '../../stylesheets/Clue02.scss';

const Clue02Es = (props) => {
  const handleForm = (ev) => {
    ev.preventDefault();
  };

  return (
    <div className="containerClue02">
      <ClueHeaderEs />
      <main className="containerMainClue02">
        <div className="clue02">
          <div className="clue02__text">
            <h2 className="clue02__text--title">2 El museo</h2>
            <p className="clue02__text--para1">Párrafo con instrucciones</p>
          </div>
          <form onSubmit={handleForm} className="clue02__form">
            <div>
              <Input
                handleInput={props.handleInput}
                clue02={props.clue02}
                className="clue02__form--input"
                type="text"
                name="clue02"
                id="clue02"
                placeholder="  introduce la clave..."
                value={props.clue02}
              />
              <ResetButtonEs handleReset={props.handleReset} />
            </div>

            <NextButtonEs
              handleInput={props.handleInput}
              input={props.clue02}
              password={props.password[1]}
              route={props.route[3]}
            />
          </form>

          <nav className="clue02Nav">
            <ul className="clue02Nav__menu">
              <li>
                <Link to="/homeEs" className="clue02Nav__menu--item">
                  Inicio
                </Link>
              </li>
              <li className="clue02Nav__menu--item">|</li>
              <li>
                <Link to="/clue01Es" className="clue02Nav__menu--item">
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

export default Clue02Es;
