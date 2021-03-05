import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Configuration from '../pages/Configuration';
import Games from '../pages/Games';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/configuration" component={Configuration} />
        <Route path="/games" component={Games} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
