// React
import React from 'react';
// Components
import FooterBlack from '../FooterBlack';
// Styles
import '../../stylesheets/Help01.scss';

const Help01En = (props) => {
  return (
    <div className="containerHelp01">
      <header className="headerHelp01">
        <i class="fas fa-paw"></i>
        <i class="fas fa-paw"></i>
        <i class="fas fa-paw"></i>
        <i class="fas fa-paw"></i>
      </header>

      <main className="containerMainHelp01">
        <div className="help01">
          <h1 className="help01__title">1 The temple</h1>
          <h2 className="help01__subtitle">Do you need help finding out the name of the Temple?</h2>
          <h2 className="help01__subtitle">Click on the clues you need to find the solution!</h2>
          <p className="help01__text">
            CLUE 1: By fitting the pieces of the puzzle you will be able to read the name from left to right and
            following the lines.
          </p>

          <p className="help01__text">
            CLUE 2: The name of the temple contains the name of the chemical element whose symbol is: B
          </p>

          <p className="help01__text">CLUE 3: take a pencil and paper and here you have the puzzle solved.</p>
        </div>
      </main>

      <FooterBlack />
    </div>
  );
};

export default Help01En;
