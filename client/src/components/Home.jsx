import React from 'react'

/* Components */
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

class Home extends React.Component {
  state = {
    
  }

  render () {
    return (
      <div>
        <Navbar/>

        <div className='parallax'>
          <div className='mainBackground'>
            <div className='description'>
              <p className='descriptionTitle'>G & V AUTO CLINIC</p>
              <p className='descriptionText'>
                Established in 2005, G & V Auto Clinic services the Bensonhurst area.
                Established in 2005, G & V Auto Clinic services the Bensonhurst area.
                Established in 2005, G & V Auto Clinic services the Bensonhurst area.
                Established in 2005, G & V Auto Clinic services the Bensonhurst area.
              </p>
            </div>
          </div>

          <div className='genaBackground'>
            <div className='genaContainer'>
              <div className='genaPicture'>
                <img className='genaImage' src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'/>
              </div>

              <div className='genaDescription'>
                <p className='genaTitle'>Gennadiy Gorelik</p>
                <p className='genaText'>Owner and founder Owner and founder Owner and founder Owner and founder Owner and founder Owner and founder Owner and founder</p>
              </div>
            </div>
          </div>

          <div className='vladBackground'>
            <div className='vladContainer'>
              <div className='vladDescription'>
                <p className='vladTitle'>Gennadiy Gorelik</p>
                <p className='vladText'>Owner and founder Owner and founder Owner and founder Owner and founder Owner and founder Owner and founder Owner and founder</p>
              </div>

              <div className='vladPicture'>
                <img className='vladImage' src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'/>
              </div>
            </div>
          </div>

        </div>

        <Footer />
      </div>
    )
  }
}

export default Home