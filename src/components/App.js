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
  const [name, setName] = useState('');
  console.log(name);

  //function definition that handles the changes in the inputs
  const handleName = (inputChange) => {
    if (inputChange.key === 'name') {
      setName(inputChange.value);
    }
  };

  const handleReset = () => {
    setName('');
  };

  return (
    <div className="containerBody">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/clue01">
          <Clue01 handleName={handleName} name={name} handleReset={handleReset} />
        </Route>

        <Route exact path="/clue02">
          <Clue02 />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
