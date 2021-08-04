// React
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Home from './Home';
import Game from './Game';
import Clue01 from './Clue01';
import Clue02 from './Clue02';

// Styles
import '../stylesheets/App.scss';
import '../stylesheets/Reset.scss';

const App = () => {
  //state
  const [password] = useState(['primera', 'segunda', 'tercera']);
  const [route] = useState(['/clue02', '/clue03', '/clue04']);
  const [clue01, setClue01] = useState('');
  const [clue02, setClue02] = useState('');

  //function definition that handles the changes in the inputs
  const handleInput = (inputKey, inputValue) => {
    if (inputKey === 'clue01') {
      setClue01(inputValue);
    } else if (inputKey === 'clue02') {
      setClue02(inputValue);
    }
  };

  const handleReset = () => {
    setClue01('');
    setClue02('');
  };

  return (
    <div className="containerBody">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/game">
          <Game />
        </Route>

        <Route exact path="/clue01">
          <Clue01
            handleInput={handleInput}
            handleReset={handleReset}
            password={password}
            route={route}
            clue01={clue01}
          />
        </Route>

        <Route exact path="/clue02">
          <Clue02
            handleInput={handleInput}
            handleReset={handleReset}
            password={password}
            route={route}
            clue02={clue02}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
