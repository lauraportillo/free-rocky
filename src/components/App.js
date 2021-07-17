// React
// cambiar cuando use el estado por:
// import React, { useState } from 'react';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Home from './Home';
// import Header from './Header';
// import Footer from './Footer';

// Styles
import '../stylesheets/App.scss';
import '../stylesheets/Reset.scss';

const App = () => {
  return (
    <div className="containerBody">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
