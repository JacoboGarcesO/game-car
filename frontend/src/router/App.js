import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Configuration from '../pages/Configuration';
import Games from '../pages/Games';
import Gamers from '../pages/Gamers';
import GameRunning from '../pages/GameRunning';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/configuration" component={Configuration} />
        <Route path="/games" component={Games} />
        <Route path="/gamers" component={Gamers} />
        <Route path="/game-running" component={GameRunning} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
