// React
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// Data
import dataClue from '../dataClue/dataClue.json';
// Components
import HomeEn from './HomeEn';
import HomeEs from './HomeEs';
import GameEn from './english/GameEn';
import GameEs from './spanish/GameEs';
import RockyEn from './english/RockyEn';
import RockyEs from './spanish/RockyEs';
import AuthorEn from './english/AuthorEn';
import AuthorEs from './spanish/AuthorEs';
import InstructionsEn from './InstructionsEn';
import InstructionsEs from './InstructionsEs';
import Clue01En from './Clue01En';
import Clue01Es from './Clue01Es';
import Clue02En from './Clue02En';
import Clue02Es from './Clue02Es';
import Clue03En from './Clue03En';
import Clue03Es from './Clue03Es';
// Styles
import '../stylesheets/App.scss';
import '../stylesheets/Reset.scss';

const App = () => {
  //state
  const [photos] = useState(dataClue);
  const [password] = useState(['borobudur', 'segunda', 'tercera']);
  const [route] = useState(['/clue02En', '/clue02Es', '/clue03En', '/clue03Es', '/clue04En', '/clue04Es']);
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

        <Route exact path="/instructionsEn">
          <InstructionsEn />
        </Route>

        <Route exact path="/instructionsEs">
          <InstructionsEs />
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

        <Route exact path="/clue01Es">
          <Clue01Es
            handleInput={handleInput}
            handleReset={handleReset}
            password={password}
            route={route}
            clue01={clue01}
            photos={photos}
          />
        </Route>

        <Route exact path="/clue02En">
          <Clue02En
            handleInput={handleInput}
            handleReset={handleReset}
            password={password}
            route={route}
            clue02={clue02}
          />
        </Route>
        <Route exact path="/clue02Es">
          <Clue02Es
            handleInput={handleInput}
            handleReset={handleReset}
            password={password}
            route={route}
            clue02={clue02}
          />
        </Route>

        <Route exact path="/clue03En">
          <Clue03En
            handleInput={handleInput}
            handleReset={handleReset}
            password={password}
            route={route}
            clue03={clue03}
          />
        </Route>

        <Route exact path="/clue03Es">
          <Clue03Es
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
