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
  const [input, setInput] = useState('');
  const [hiddenClass, setHiddenClass] = useState('hidden');

  //function definition that handles the changes in the inputs
  const handleInput = (inputChange) => {
    if (inputChange.key === 'input') {
      setInput(inputChange.value);
    }
    setHiddenClass('');
  };

  const handleReset = () => {
    setInput('');
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
          <Clue01
            handleInput={handleInput}
            handleReset={handleReset}
            password={password}
            route={route}
            input={input}
            hiddenClass={hiddenClass}
          />
        </Route>

        <Route exact path="/clue02">
          <Clue02 />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
