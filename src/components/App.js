// React
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// Data
import dataClue from '../dataClue/dataClue.json';
// Components
import Home from './Home';
import GameEn from './GameEn';
import GameEs from './GameEs';
import RockyEn from './RockyEn';
import RockyEs from './RockyEs';
import AuthorEn from './AuthorEn';
import AuthorEs from './AuthorEs';
import Clue01 from './Clue01';
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
  const [languages] = useState(['/gameEn', '/gameEs', '/rockyEn', '/rockyEs', '/authorEn', '/authorEs']);
  const [clue01, setClue01] = useState('');
  const [clue02, setClue02] = useState('');
  const [clue03, setClue03] = useState('');
  const [showLetter, setShowLetter] = useState(false);

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

  const handlePhoto = (clickedId) => {
    const photoSelected = photos.find((photo) => {
      return photo.id === clickedId;
    });
    setShowLetter(true);
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
          <GameEn languages={languages} />
        </Route>

        <Route exact path="/gameEs">
          <GameEs languages={languages} />
        </Route>

        <Route exact path="/rockyEn">
          <RockyEn languages={languages} />
        </Route>

        <Route exact path="/rockyEs">
          <RockyEs languages={languages} />
        </Route>

        <Route exact path="/authorEn">
          <AuthorEn languages={languages} />
        </Route>

        <Route exact path="/authorEs">
          <AuthorEs languages={languages} />
        </Route>

        <Route exact path="/clue01">
          <Clue01
            handleInput={handleInput}
            handleReset={handleReset}
            password={password}
            route={route}
            clue01={clue01}
            photos={photos}
            showLetter={showLetter}
            handlePhoto={handlePhoto}
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
