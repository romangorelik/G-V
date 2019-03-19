import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {

  render () {
    return (
      <div>
        <nav>
          <a><Link to='/home'>HOME</Link></a>
          <a><Link to='/services'>SERVICES</Link></a>
          <a><Link to='/contact'>CONTACT</Link></a>
        </nav>
    </div>
    )
  }
}

export default Navbar