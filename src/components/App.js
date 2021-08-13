// React
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Home from './Home';
import GameEn from './GameEn';
import RockyEn from './RockyEn';
import Author from './Author';
import Clue01 from './Clue01';
import Clue02 from './Clue02';
import Clue03 from './Clue03';

// Styles
import '../stylesheets/App.scss';
import '../stylesheets/Reset.scss';

const App = () => {
  //state
  const [password] = useState(['primera', 'segunda', 'tercera']);
  const [route] = useState(['/clue02', '/clue03', '/clue04']);
  const [clue01, setClue01] = useState('');
  const [clue02, setClue02] = useState('');
  const [clue03, setClue03] = useState('');

  //function definition that handles the changes in the inputs
  const handleInput = (inputKey, inputValue) => {
    if (inputKey === 'clue01') {
      setClue01(inputValue);
    } else if (inputKey === 'clue02') {
      setClue02(inputValue);
    } else if (inputKey === 'clue03') {
      setClue03(inputValue);
    }
  };

  const handleReset = () => {
    setClue01('');
    setClue02('');
    setClue03('');
  };

  return (
    <div className="containerBody">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/gameEn">
          <GameEn />
        </Route>

        <Route exact path="/rockyEn">
          <RockyEn />
        </Route>

        <Route exact path="/author">
          <Author />
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

        <Route exact path="/clue03">
          <Clue03
            handleInput={handleInput}
            handleReset={handleReset}
            password={password}
            route={route}
            clue03={clue03}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
