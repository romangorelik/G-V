import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './HomePage.jsx'
import Home from './Home.jsx'
import Contact from './Contact.jsx'
import Services from './Services.jsx'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
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