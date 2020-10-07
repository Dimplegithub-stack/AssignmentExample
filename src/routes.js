import React from 'react';
import  About from './views/About';
import  LeaderDetails  from './views/LeaderDetails';
import  LeaderDetailsRedux  from './views/LeaderDetailsRedux';
import  Navbar  from './components/Navbar';

import { Route, Switch } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/LeaderDetails" component={LeaderDetails} />
        <Route exact path="/" component={About}>
        
        </Route>
        <Route exact path="/InputForm" component={LeaderDetailsRedux} />
      </Switch>
    </div>
  );
};