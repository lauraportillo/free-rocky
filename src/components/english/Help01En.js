// React
import React from 'react';
// Components
import ClueHeaderEn from './ClueHeaderEn';
import FooterBlack from '../FooterBlack';
// Styles
import '../../stylesheets/Help01.scss';

const Help01En = (props) => {
  return (
    <div className="containerHelp01">
      <ClueHeaderEn />

      <main className="containerMainHelp01">
        <div className="help01">
          <div className="help01__paws">
            <div className="help01__paws--1">
              <i class="fas fa-paw fa-rotate-90"></i>
              <i class="fas fa-paw fa-rotate-90"></i>
              <i class="fas fa-paw fa-rotate-90"></i>
            </div>
            <div>
              <i class="fas fa-paw fa-rotate-90"></i>
              <i class="fas fa-paw fa-rotate-90"></i>
              <i class="fas fa-paw fa-rotate-90"></i>
              <i class="fas fa-paw fa-rotate-90"></i>
            </div>
          </div>
          <div className="help01__text">
            <h1 className="help01__text--title">1 The temple</h1>
            <h2 className="help01__text--subtitle">Do you need help finding out the name of the Temple?</h2>
            <h2 className="help01__text--subtitle">Click on the clues you need to find the solution!</h2>
            <p className="help01__text--para">
              CLUE 1: By fitting the pieces of the puzzle you will be able to read the name from left to right and
              following the lines.
            </p>

            <p className="help01__text--para">
              CLUE 2: The name of the temple contains the name of the chemical element whose symbol is: B
            </p>

            <p className="help01__text--para">CLUE 3: take a pencil and paper and here you have the puzzle solved.</p>
          </div>
        </div>
      </main>

      <FooterBlack />
    </div>
  );
};

export default Help01En;
