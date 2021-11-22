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
// Data
import dataCrossword from '../../dataClue/dataCrossword.json';
// Styles
import '../../stylesheets/Clue02.scss';

const Clue02En = (props) => {
  //state
  const [city] = useState(dataCrossword);
  // BORRRARRRRRRRRRRRRRRRRRRRRRRRRRRRRR  VER CÓMO USAR LOS DATOS DEL JSON *****************************************************************
  console.log(city);
  //across
  const [md01, setMd01] = useState('');
  const [md02, setMd02] = useState('');
  const [md03, setMd03] = useState('');
  const [md04, setMd04] = useState('');
  const [md05, setMd05] = useState('');
  const [md06, setMd06] = useState('');

  const handleForm = (ev) => {
    ev.preventDefault();
  };
  //function definition that handles the changes in crossword inputs
  const handleCrosswordInput = (inputCrosswordKey, inputCrosswordValue) => {
    if (inputCrosswordKey === 'md01') {
      setMd01(inputCrosswordValue);
    } else if (inputCrosswordKey === 'md02') {
      setMd02(inputCrosswordValue);
    } else if (inputCrosswordKey === 'md03') {
      setMd03(inputCrosswordValue);
    } else if (inputCrosswordKey === 'md04') {
      setMd04(inputCrosswordValue);
    } else if (inputCrosswordKey === 'md05') {
      setMd05(inputCrosswordValue);
    } else if (inputCrosswordKey === 'md06') {
      setMd06(inputCrosswordValue);
    }
  };

  // console.log(md01);
  // console.log(md02);
  // console.log(md03);
  // console.log(md04);
  // console.log(md05);
  // console.log(md06);

  return (
    <div className="containerClue02">
      <ClueHeaderEn />
      <main className="containerMainClue02">
        <div className="clue02">
          <CrosswordEn
            handleCrosswordInput={handleCrosswordInput}
            city={city}
            md01={md01}
            md02={md02}
            md03={md03}
            md04={md04}
            md05={md05}
            md06={md06}
          />
          <section className="clue02__text">
            <h2 className="clue02__text--title">2 The museum</h2>
            <h3 className="clue02__text--para1">Across</h3>
            <p className="clue02__text--para2">{city[0].clue}</p>
            <p className="clue02__text--para2">2 The Jewel on the Danube.</p>
            <p className="clue02__text--para2">3 Simón Bolívar is buried here.</p>
            <p className="clue02__text--para2">4 Luzon island’s second most populous city.</p>

            <h3 className="clue02__text--para1">Down</h3>
            <p className="clue02__text--para2">1 One of the most famous walls.</p>
            <p className="clue02__text--para2">2 Scotland’s largest city.</p>
            <p className="clue02__text--para2">3 It is the city of love.</p>
            <p className="clue02__text--para2">4 Albania's capital.</p>

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
