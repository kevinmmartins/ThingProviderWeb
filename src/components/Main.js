import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import Collaborators from './Collaborators';
import OpenSource from './OpenSource';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/services' component={Services}/>
      <Route path='/colaborators' component={Collaborators}/>
      <Route path='/open' component={OpenSource}/>
    </Switch>
  </main>
)
export default Main
