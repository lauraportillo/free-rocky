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
  const [clue01, setClue01] = useState('');
  const [hiddenClass, setHiddenClass] = useState('hidden');
  console.log(clue01);

  //function definition that handles the changes in the inputs
  const handleClue01 = (inputChange) => {
    if (inputChange.key === 'clue01') {
      setClue01(inputChange.value);
    }
  };

  const handleReset = () => {
    setClue01('');
    setHiddenClass('hidden');
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
          <Clue01 handleClue01={handleClue01} handleReset={handleReset} clue01={clue01} hiddenClass={hiddenClass} />
        </Route>

        <Route exact path="/clue02">
          <Clue02 />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
