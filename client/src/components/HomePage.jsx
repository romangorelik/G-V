import React from 'react'
import { Link } from 'react-router-dom'

class HomePage extends React.Component {
  render () {
    return (
      <div>
        <button><Link to='/home'>Go there</Link></button>
      </div>
    )
  }
}

export default HomePage