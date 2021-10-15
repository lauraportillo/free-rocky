// React
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Components
import ClueHeaderEn from './ClueHeaderEn';
import FooterBlack from '../FooterBlack';
// Styles
import '../../stylesheets/Help01.scss';

const Help01En = () => {
  //state
  const [showClue1, setShowClue1] = useState();
  const [showClue2, setShowClue2] = useState();
  const [showClue3, setShowClue3] = useState();
  const [showClue4, setShowClue4] = useState();
  //functions to show or hide clues
  const handleBtn1 = () => {
    setShowClue1(!showClue1);
  };
  const handleBtn2 = () => {
    setShowClue2(!showClue2);
  };
  const handleBtn3 = () => {
    setShowClue3(!showClue3);
  };
  const handleBtn4 = () => {
    setShowClue4(!showClue4);
  };
  //functions that render clues information when the state showClue is true, and doesn't when is false
  const renderClue1 = () => {
    return showClue1
      ? 'By fitting the pieces of the puzzle you will be able to read the name from left to right and following the lines.'
      : null;
  };
  const renderClue2 = () => {
    return showClue2 ? 'The name of the temple contains the name of the chemical element whose symbol is: B' : null;
  };
  const renderClue3 = () => {
    return showClue3 ? 'This temple is on an island that has the same name as a backend programming language.' : null;
  };
  const renderClue4 = () => {
    return showClue4 ? 'Take a pencil and paper and here you have the puzzle solved.' : null;
  };

  return (
    <div className="containerHelp01">
      <ClueHeaderEn />

      <main className="containerMainHelp01">
        <div className="help01">
          <div className="help01__paws">
            <div className="help01__paws--1">
              <i className="fas fa-paw fa-rotate-90"></i>
              <i className="fas fa-paw fa-rotate-90"></i>
              <i className="fas fa-paw fa-rotate-90"></i>
            </div>
            <div>
              <i className="fas fa-paw fa-rotate-90"></i>
              <i className="fas fa-paw fa-rotate-90"></i>
              <i className="fas fa-paw fa-rotate-90"></i>
              <i className="fas fa-paw fa-rotate-90"></i>
            </div>
          </div>
          <div className="help01__text">
            <h1 className="help01__text--title">1 The temple</h1>
            <p className="help01__text--subtitle">Do you need help finding out the name of the Temple?</p>
            <p className="help01__text--subtitle">Click on the clues you need to find the solution!</p>

            <button className="help01__text--btn" onClick={handleBtn1}>
              Clue 1
            </button>
            <p className="help01__text--para"> {renderClue1()}</p>

            <button className="help01__text--btn" onClick={handleBtn2}>
              Clue 2
            </button>
            <p className="help01__text--para"> {renderClue2()}</p>

            <button className="help01__text--btn" onClick={handleBtn3}>
              Clue 3
            </button>
            <p className="help01__text--para"> {renderClue3()}</p>

            <button className="help01__text--btn" onClick={handleBtn4}>
              Clue 4
            </button>
            <div>
              <p className="help01__text--para">Take a pencil and paper and here you have the puzzle solved.</p>
              <div className="help01__text--img"></div>
            </div>
            <p className="help01__text--para"> {renderClue4()}</p>
          </div>

          <nav className="help01Nav">
            <ul className="help01Nav__menu">
              <li>
                <Link to="/clue01En" className="help01Nav__menu--item">
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

export default Help01En;
