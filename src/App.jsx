/** @format */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
     return (
          <Switch>
               <Route path='/' component={Home} exact />
               <Route path='/about' component={About} exact />
          </Switch>
     );
};

export default App;
