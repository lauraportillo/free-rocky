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

  //across
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
    }
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
          />

          <section className="clue02__text">
            <h2 className="clue02__text--title">2 The museum</h2>
            <h3 className="clue02__text--para1">Across</h3>
            <p className="clue02__text--para2">{city[0].clue}</p>
            <p className="clue02__text--para2">{city[1].clue}</p>
            <p className="clue02__text--para2">{city[2].clue}</p>
            <p className="clue02__text--para2">{city[3].clue}</p>

            <h3 className="clue02__text--para1">Down</h3>
            <p className="clue02__text--para2">{city[4].clue}</p>
            <p className="clue02__text--para2">{city[5].clue}</p>
            <p className="clue02__text--para2">{city[6].clue}</p>
            <p className="clue02__text--para2">{city[7].clue}</p>

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
