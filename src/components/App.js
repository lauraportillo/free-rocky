// React
// cambiar cuando use el estado por:
// import React, { useState } from 'react';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Home from './Home';
import Clue01 from './Clue01';
import Clue02 from './Clue02';

// Styles
import '../stylesheets/App.scss';
import '../stylesheets/Reset.scss';

const App = () => {
  return (
    <div className="containerBody">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/clue01" component={Clue01} />
        <Route exact path="/clue02" component={Clue02} />
      </Switch>
    </div>
  );
};

export default App;
