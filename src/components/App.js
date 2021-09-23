// React
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// Data
import dataClue from '../dataClue/dataClue.json';
// Components
import HomeEn from './HomeEn';
import HomeEs from './HomeEs';
import GameEn from './GameEn';
import GameEs from './GameEs';
import RockyEn from './RockyEn';
import RockyEs from './RockyEs';
import AuthorEn from './AuthorEn';
import AuthorEs from './AuthorEs';
import Clue01En from './Clue01En';
import Clue02 from './Clue02';
import Clue03 from './Clue03';
// Styles
import '../stylesheets/App.scss';
import '../stylesheets/Reset.scss';

const App = () => {
  //state
  const [photos] = useState(dataClue);
  const [password] = useState(['borobudur', 'segunda', 'tercera']);
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
          <HomeEn />
        </Route>
        <Route exact path="/homeEs">
          <HomeEs />
        </Route>

        <Route exact path="/gameEn">
          <GameEn />
        </Route>

        <Route exact path="/gameEs">
          <GameEs />
        </Route>

        <Route exact path="/rockyEn">
          <RockyEn />
        </Route>

        <Route exact path="/rockyEs">
          <RockyEs />
        </Route>

        <Route exact path="/authorEn">
          <AuthorEn />
        </Route>

        <Route exact path="/authorEs">
          <AuthorEs />
        </Route>

        <Route exact path="/clue01En">
          <Clue01En
            handleInput={handleInput}
            handleReset={handleReset}
            password={password}
            route={route}
            clue01={clue01}
            photos={photos}
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
