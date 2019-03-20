import React from 'react'

/* Components */
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

class Contact extends React.Component {
  state = {
    message: '',
    email: '',
    firstName: '',
    lastName: '',
    phone: ''
  }

  getMessage = (e) => {
    let message = e.target.value
    this.setState({
      message: message
    })
  }

  getEmail = (e) => {
    let message = e.target.value
    this.setState({
      email: message
    })
  }

  getPhone = (e) => {
    let message = e.target.value
    this.setState({
      phone: message
    })
  }

  getFirst = (e) => {
    let message = e.target.value
    this.setState({
      firstName: message
    })
  }

  getLast = (e) => {
    let message = e.target.value
    this.setState({
      lastName: message
    })
  }


  render () {
    return (
      <div>
        <Navbar />
        
        <div className='contact'>
          <div className='contactContainer'>
            
            <input className='fullName' type='text' placeholder='First Name' onChange={(e) => this.getFirst(e)}></input>
            <input className='fullName' type='text' placeholder='Last Name' onChange={(e) => this.getLast(e)}></input>
            <input className='fullName' type='text' placeholder='Phone Number' onChange={(e) => this.getPhone(e)}></input>
            <input className='fullName' type='email' placeholder='Email' onChange={(e) => this.getEmail(e)}></input>
            <textarea className='helpBox' type='text' placeholder='How can we help you?' maxLength='1000' onChange={(e) => this.getMessage(e)}></textarea>
            <button className='submitButton'>Submit</button>

          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default Contact