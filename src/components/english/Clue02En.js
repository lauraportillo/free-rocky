// React
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Components
import ClueHeaderEn from './ClueHeaderEn';
import CrosswordEn from './CrosswordEn';
import Input from '../Input';
import NextButtonEn from './NextButtonEn';
import ResetButtonEn from './ResetButtonEn';
import FooterBlack from '../FooterBlack';

// Styles
import '../../stylesheets/Clue02.scss';

const Clue02En = (props) => {
  //state
  const [crossword, setCrossword] = useState('');

  const handleForm = (ev) => {
    ev.preventDefault();
  };
  //PONERME CON ESTO: function definition that handles the changes in crossword inputs
  const handleCrosswordInput = (inputCrosswordKey, inputCrosswordValue) => {
    if (inputCrosswordKey === 'crossword') {
      setCrossword(inputCrosswordValue);
    }
  };

  return (
    <div className="containerClue02">
      <ClueHeaderEn />
      <main className="containerMainClue02">
        <div className="clue02">
          <CrosswordEn handleCrosswordInput={handleCrosswordInput} crossword={crossword} />
          <section className="clue02__text">
            <h2 className="clue02__text--title">2 The museum</h2>

            <h3 className="clue02__text--para1">Across</h3>
            <p className="clue02__text--para2">1</p>
            <p className="clue02__text--para2">2</p>
            <p className="clue02__text--para2">3</p>
            <p className="clue02__text--para2">4</p>

            <h3 className="clue02__text--para1">Down</h3>
            <p className="clue02__text--para2">1</p>
            <p className="clue02__text--para2">2</p>
            <p className="clue02__text--para2">3</p>
            <p className="clue02__text--para2">4</p>

            <p className="clue01__text--para">
              <Link to="/help02En" className="clue01__text--help">
                🔎 Clues!
              </Link>
            </p>
          </section>
          <form onSubmit={handleForm} className="clue02__form">
            <div>
              <Input
                handleInput={props.handleInput}
                clue02={props.clue02}
                className="clue02__form--input"
                type="text"
                name="clue02"
                id="clue02"
                placeholder="  enter the clue..."
                value={props.clue02}
              />
              <ResetButtonEn handleReset={props.handleReset} />
            </div>

            <NextButtonEn
              handleInput={props.handleInput}
              input={props.clue02}
              password={props.password[1]}
              route={props.route[2]}
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
                <Link to="/clue01En" className="clue02Nav__menu--item">
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

export default Clue02En;
