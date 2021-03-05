import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Configuration from '../pages/Configuration';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/configuration" component={Configuration}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
