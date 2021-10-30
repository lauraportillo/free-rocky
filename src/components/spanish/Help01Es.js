// React
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Components
import ClueHeaderEs from './ClueHeaderEs';
import Help01Clue4Es from './Help01Clue4Es';
import FooterBlack from '../FooterBlack';
// Styles
import '../../stylesheets/Help01.scss';

const Help01Es = () => {
  //state
  const [showClue1, setShowClue1] = useState();
  const [showClue2, setShowClue2] = useState();
  const [showClue3, setShowClue3] = useState();
  const [showClue4, setShowClue4] = useState();

  //functions to show or hide clues
  const handleBtn1 = () => {
    setShowClue1(!showClue1);
    setShowClue2();
    setShowClue3();
    setShowClue4();
  };
  const handleBtn2 = () => {
    setShowClue2(!showClue2);
    setShowClue1();
    setShowClue3();
    setShowClue4();
  };
  const handleBtn3 = () => {
    setShowClue3(!showClue3);
    setShowClue1();
    setShowClue2();
    setShowClue4();
  };
  const handleBtn4 = () => {
    setShowClue4(!showClue4);
    setShowClue1();
    setShowClue2();
    setShowClue3();
  };

  //functions that render clues information when the state showClue is true, and doesn't when is false
  const renderClue1 = () => {
    return showClue1
      ? 'Encajando las piezas del puzzle podrás leer el nombre de izquierda a derecha y siguiendo las líneas.'
      : null;
  };
  const renderClue2 = () => {
    return showClue2 ? 'El nombre del templo contiene el nombre del elemento químico cuyo símbolo es: B' : null;
  };
  const renderClue3 = () => {
    return showClue3
      ? 'Este templo está en una isla que tiene el mismo nombre que un lenguaje de programación backend.'
      : null;
  };
  const renderClue4 = () => {
    return showClue4 ? <Help01Clue4Es /> : null;
  };

  return (
    <div className="containerHelp01">
      <ClueHeaderEs />
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
            <h1 className="help01__text--title">1 El templo</h1>
            <p className="help01__text--subtitle">Necesitas ayuda para averiguar el nombre del Templo?</p>
            <p className="help01__text--subtitle">Haz click en las pistas que necesites para llegar a la solución!</p>

            <button className="help01__text--btn" onClick={handleBtn1}>
              Pista 1
            </button>
            <section className="help01__text--sec"> {renderClue1()}</section>

            <button className="help01__text--btn" onClick={handleBtn2}>
              Pista 2
            </button>
            <section className="help01__text--sec"> {renderClue2()}</section>

            <button className="help01__text--btn" onClick={handleBtn3}>
              Pista 3
            </button>
            <section className="help01__text--sec"> {renderClue3()}</section>

            <button className="help01__text--btn" onClick={handleBtn4}>
              Pista 4
            </button>
            <section className="help01__text--sec"> {renderClue4()}</section>
          </div>

          <nav className="help01Nav">
            <ul className="help01Nav__menu">
              <li>
                <Link to="/clue01Es" className="help01Nav__menu--item">
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

export default Help01Es;
