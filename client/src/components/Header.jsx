import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
class Header extends React.Component {

  render () {
    return (
      <div>
        <nav>
          <a><Link to='/home'>Home</Link></a>
          <a><Link to='/services'>Services</Link></a>
          <a><Link to='/contact'>Contact</Link></a>
        </nav>
    </div>
    )
  }
}

export default Header