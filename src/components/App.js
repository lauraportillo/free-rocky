// React
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Home from './Home';
import Clue01 from './Clue01';
import Clue02 from './Clue02';

// Styles
import '../stylesheets/App.scss';
import '../stylesheets/Reset.scss';

const App = () => {
  //state
  const [clue01, setClue01] = useState('');
  const [enabled, setEnabled] = useState(false);
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
    setEnabled(false);
    setHiddenClass('hidden');
  };

  // const handlePassword = () => {
  //   setHiddenClass('');
  //   const password = 'clave';
  //   if (setClue01 === password) {
  //     setEnabled(true);
  //   } else {
  //     setEnabled(false);
  //   }
  // };

  return (
    <div className="containerBody">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/clue01">
          <Clue01
            handleClue01={handleClue01}
            handleReset={handleReset}
            // handlePassword={handlePassword}
            clue01={clue01}
            enabled={enabled}
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
