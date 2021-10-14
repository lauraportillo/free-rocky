// React
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Components
import ClueHeaderEs from './ClueHeaderEs';
import FooterBlack from '../FooterBlack';
// Styles
import '../../stylesheets/Help01.scss';

const Help01Es = () => {
  return (
    <div className="containerHelp01">
      <ClueHeaderEs />

      <main className="containerMainHelp01"></main>

      <FooterBlack />
    </div>
  );
};

export default Help01Es;
