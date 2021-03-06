import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';

import Counter from './components/Counter';
import Lineup from './components/Lineup';
import App from './components/App';


const routes = (
  <Router history={createHashHistory()}>
    <Route path='/' component={App}>
      <IndexRoute component={Counter} />
      <Route path='lineup' component={Lineup} />
    </Route>
  </Router>
);

export default routes;
