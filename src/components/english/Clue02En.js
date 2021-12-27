// React
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Components
import ClueHeaderEn from './ClueHeaderEn';
import CrosswordEn from './CrosswordEn';
import Input from '../Input';
import Clue02NextStepEn from './Clue02NextStepEn';
import NextButtonEn from './NextButtonEn';
import ResetButtonEn from './ResetButtonEn';
import FooterBlack from '../FooterBlack';
// Data
import dataCrossword from '../../dataClue/dataCrossword.json';
// Styles
import '../../stylesheets/Clue02.scss';

const Clue02En = (props) => {
  // state
  const [city] = useState(dataCrossword);
  const [showNextStep, setShowNextStep] = useState();

  // across
  const [md01, setMd01] = useState('');
  const [md02, setMd02] = useState('');
  const [md03, setMd03] = useState('');
  const [md04, setMd04] = useState('');
  const [md05, setMd05] = useState('');
  const [md06, setMd06] = useState('');

  const [bu01, setBu01] = useState('');
  const [bu02, setBu02] = useState('');
  const [bu03, setBu03] = useState('');
  const [bu04, setBu04] = useState('');
  const [bu05, setBu05] = useState('');
  const [bu06, setBu06] = useState('');
  const [bu07, setBu07] = useState('');
  const [bu08, setBu08] = useState('');

  const [ca01, setCa01] = useState('');
  const [ca02, setCa02] = useState('');
  const [ca03, setCa03] = useState('');
  const [ca04, setCa04] = useState('');
  const [ca05, setCa05] = useState('');
  const [ca06, setCa06] = useState('');
  const [ca07, setCa07] = useState('');

  const [mn01, setMn01] = useState('');
  const [mn02, setMn02] = useState('');
  const [mn03, setMn03] = useState('');
  const [mn04, setMn04] = useState('');
  const [mn05, setMn05] = useState('');
  const [mn06, setMn06] = useState('');

  // down
  const [b01, setB01] = useState('');
  const [b02, setB02] = useState('');
  const [b03, setB03] = useState('');
  const [b04, setB04] = useState('');
  const [b05, setB05] = useState('');
  const [b06, setB06] = useState('');

  const [g01, setG01] = useState('');
  const [g02, setG02] = useState('');
  const [g03, setG03] = useState('');
  const [g04, setG04] = useState('');
  const [g05, setG05] = useState('');
  const [g06, setG06] = useState('');
  const [g07, setG07] = useState('');

  const [p01, setP01] = useState('');
  const [p02, setP02] = useState('');
  const [p03, setP03] = useState('');
  const [p04, setP04] = useState('');
  const [p05, setP05] = useState('');

  const [t01, setT01] = useState('');
  const [t02, setT02] = useState('');
  const [t03, setT03] = useState('');
  const [t04, setT04] = useState('');
  const [t05, setT05] = useState('');
  const [t06, setT06] = useState('');

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
    } else if (inputCrosswordKey === 'bu01') {
      setBu01(inputCrosswordValue);
    } else if (inputCrosswordKey === 'bu02') {
      setBu02(inputCrosswordValue);
    } else if (inputCrosswordKey === 'bu03') {
      setBu03(inputCrosswordValue);
    } else if (inputCrosswordKey === 'bu04') {
      setBu04(inputCrosswordValue);
    } else if (inputCrosswordKey === 'bu05') {
      setBu05(inputCrosswordValue);
    } else if (inputCrosswordKey === 'bu06') {
      setBu06(inputCrosswordValue);
    } else if (inputCrosswordKey === 'bu07') {
      setBu07(inputCrosswordValue);
    } else if (inputCrosswordKey === 'bu08') {
      setBu08(inputCrosswordValue);
    } else if (inputCrosswordKey === 'ca01') {
      setCa01(inputCrosswordValue);
    } else if (inputCrosswordKey === 'ca02') {
      setCa02(inputCrosswordValue);
    } else if (inputCrosswordKey === 'ca03') {
      setCa03(inputCrosswordValue);
    } else if (inputCrosswordKey === 'ca04') {
      setCa04(inputCrosswordValue);
    } else if (inputCrosswordKey === 'ca05') {
      setCa05(inputCrosswordValue);
    } else if (inputCrosswordKey === 'ca06') {
      setCa06(inputCrosswordValue);
    } else if (inputCrosswordKey === 'ca07') {
      setCa07(inputCrosswordValue);
    } else if (inputCrosswordKey === 'mn01') {
      setMn01(inputCrosswordValue);
    } else if (inputCrosswordKey === 'mn02') {
      setMn02(inputCrosswordValue);
    } else if (inputCrosswordKey === 'mn03') {
      setMn03(inputCrosswordValue);
    } else if (inputCrosswordKey === 'mn04') {
      setMn04(inputCrosswordValue);
    } else if (inputCrosswordKey === 'mn05') {
      setMn05(inputCrosswordValue);
    } else if (inputCrosswordKey === 'mn06') {
      setMn06(inputCrosswordValue);
    } else if (inputCrosswordKey === 'b01') {
      setB01(inputCrosswordValue);
    } else if (inputCrosswordKey === 'b02') {
      setB02(inputCrosswordValue);
    } else if (inputCrosswordKey === 'b03') {
      setB03(inputCrosswordValue);
    } else if (inputCrosswordKey === 'b04') {
      setB04(inputCrosswordValue);
    } else if (inputCrosswordKey === 'b05') {
      setB05(inputCrosswordValue);
    } else if (inputCrosswordKey === 'b06') {
      setB06(inputCrosswordValue);
    } else if (inputCrosswordKey === 'g01') {
      setG01(inputCrosswordValue);
    } else if (inputCrosswordKey === 'g02') {
      setG02(inputCrosswordValue);
    } else if (inputCrosswordKey === 'g03') {
      setG03(inputCrosswordValue);
    } else if (inputCrosswordKey === 'g04') {
      setG04(inputCrosswordValue);
    } else if (inputCrosswordKey === 'g05') {
      setG05(inputCrosswordValue);
    } else if (inputCrosswordKey === 'g06') {
      setG06(inputCrosswordValue);
    } else if (inputCrosswordKey === 'g07') {
      setG07(inputCrosswordValue);
    } else if (inputCrosswordKey === 'p01') {
      setP01(inputCrosswordValue);
    } else if (inputCrosswordKey === 'p02') {
      setP02(inputCrosswordValue);
    } else if (inputCrosswordKey === 'p03') {
      setP03(inputCrosswordValue);
    } else if (inputCrosswordKey === 'p04') {
      setP04(inputCrosswordValue);
    } else if (inputCrosswordKey === 'p05') {
      setP05(inputCrosswordValue);
    } else if (inputCrosswordKey === 't01') {
      setT01(inputCrosswordValue);
    } else if (inputCrosswordKey === 't02') {
      setT02(inputCrosswordValue);
    } else if (inputCrosswordKey === 't03') {
      setT03(inputCrosswordValue);
    } else if (inputCrosswordKey === 't04') {
      setT04(inputCrosswordValue);
    } else if (inputCrosswordKey === 't05') {
      setT05(inputCrosswordValue);
    } else if (inputCrosswordKey === 't06') {
      setT06(inputCrosswordValue);
    }
  };

  //function to show or hide Next Step
  const handleNextStep = () => {
    setShowNextStep(!showNextStep);
  };

  //function that render next step when the state showNextStep is true, and doesn't when is false
  const renderNextStep = () => {
    return showNextStep ? <Clue02NextStepEn /> : null;
  };

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
            bu01={bu01}
            bu02={bu02}
            bu03={bu03}
            bu04={bu04}
            bu05={bu05}
            bu06={bu06}
            bu07={bu07}
            bu08={bu08}
            ca01={ca01}
            ca02={ca02}
            ca03={ca03}
            ca04={ca04}
            ca05={ca05}
            ca06={ca06}
            ca07={ca07}
            mn01={mn01}
            mn02={mn02}
            mn03={mn03}
            mn04={mn04}
            mn05={mn05}
            mn06={mn06}
            b01={b01}
            b02={b02}
            b03={b03}
            b04={b04}
            b05={b05}
            b06={b06}
            g01={g01}
            g02={g02}
            g03={g03}
            g04={g04}
            g05={g05}
            g06={g06}
            g07={g07}
            p01={p01}
            p02={p02}
            p03={p03}
            p04={p04}
            p05={p05}
            t01={t01}
            t02={t02}
            t03={t03}
            t04={t04}
            t05={t05}
            t06={t06}
          />

          <section className="clue02__text">
            <h2 className="clue02__text--title">2 The museum</h2>

            <p className="clue02__text--para1">
              Rocky has a favourite museum and he used to go there with his family every year. If you know which one it
              is, go ahead! Otherwise, solve this crossword and follow the clues!
            </p>

            <h3 className="clue02__text--para1">Cities of the world</h3>

            <p className="clue02__text--para1">Across:</p>
            <p className="clue02__text--para2">{city[1].clue}</p>
            <p className="clue02__text--para2">{city[0].clue}</p>
            <p className="clue02__text--para2">{city[2].clue}</p>
            <p className="clue02__text--para2">{city[3].clue}</p>

            <p className="clue02__text--para1">Down:</p>
            <p className="clue02__text--para2">{city[4].clue}</p>
            <p className="clue02__text--para2">{city[5].clue}</p>
            <p className="clue02__text--para2">{city[6].clue}</p>
            <p className="clue02__text--para2">{city[7].clue}</p>
          </section>

          <section className="clue02__text">
            <button className="clue02__btn" onClick={handleNextStep}>
              <span className="clue02__text--paraBoldBlack">Next step</span> 👉
            </button>
            <section className="clue02__text"> {renderNextStep()}</section>
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
                placeholder="  enter museum's name ..."
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
