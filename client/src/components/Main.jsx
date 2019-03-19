import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './HomePage.jsx'
import Home from './Home.jsx'
import Contact from './Contact.jsx'
import Services from './Services.jsx'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/home' component={Home}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/services' component={Services}/>
    </Switch>
  </main>
)

export default Main