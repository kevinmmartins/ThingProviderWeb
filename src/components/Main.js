import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './About'
import Services from './Services'
import Collaborators from './Collaborators'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/services' component={Services}/>
      <Route path='/colaborators' component={Collaborators}/>
    </Switch>
  </main>
)
export default Main
