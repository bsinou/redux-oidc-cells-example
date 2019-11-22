import React from 'react';
import { Router, Route } from 'react-router';

import { createBrowserHistory } from "history";

import MainPage from './components/mainPage';
import CallbackPage from './components/callback';

const history = createBrowserHistory();

export default function Routes(props) {
  return (
    <Router history={history}>
      <div>
        <Route path="/" component={MainPage} />
        <Route path="/callback" component={CallbackPage} />
      </div>
    </Router>
  );
}
