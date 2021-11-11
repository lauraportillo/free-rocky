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
    }
  };

  console.log(md01);
  console.log(md02);
  console.log(md03);
  console.log(md04);
  console.log(md05);
  console.log(md06);

  console.log(bu01);
  console.log(bu02);
  console.log(bu03);
  console.log(bu04);
  console.log(bu05);
  console.log(bu06);
  console.log(bu07);
  console.log(bu08);

  return (
    <div className="containerClue02">
      <ClueHeaderEn />
      <main className="containerMainClue02">
        <div className="clue02">
          <CrosswordEn
            handleCrosswordInput={handleCrosswordInput}
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
