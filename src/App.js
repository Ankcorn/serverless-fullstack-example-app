import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/header'
import Home from './pages/home';
import App from './app/index';

export default function Routes() {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route path="/app">
            <App />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
