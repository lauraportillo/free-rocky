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
  // console.log(clue01);

  //function definition that handles the changes in the inputs
  const handleClue01 = (inputChange) => {
    console.log('App2', inputChange);
    if (inputChange.key === 'clue01') {
      setClue01(inputChange.value);
    }

    // separar por aqui en dos funciones y que la parte de abajo se ejecute cuando cambie clue01
    // que handle password se ejecute cuando cambie clue01
    // buscar onchage clue01

    console.log('App', clue01);
    setHiddenClass('');
    const password = 'clave';
    if (clue01 === password) {
      // console.log('estamos en el if');
      console.log('App', clue01);
      setEnabled(true);
    } else {
      setEnabled(false);
      // console.log('estamos en el else');
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
  //   if (clue01 === password) {
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
