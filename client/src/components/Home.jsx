import React from 'react'

/* Components */
import Footer from './Footer.jsx'

class Home extends React.Component {
  state = {
    
  }

  render () {
    return (
      <div>

        <div className='parallax'>
          <div className='mainBackground'>
            <div className='description'>
              <p className='descriptionTitle'>G & V AUTO CLINIC</p>
              <p className='descriptionText'>
                Established in 2002, G & V Auto Clinic has been servicing the Kensington area in Brooklyn, NY.
                We strive for excellence, fairness, and quick results. We offer a variety
                of services, and will never talk you into something you don't need. The two owners met when they were coworkers
                and decided to go into business together.
              </p>
              <p className='hebrew'>שומר שבת</p>
            </div>
          </div>

          <div className='genaBackground'>
            <div className='genaContainer'>
              <div className='genaPicture'>
                <img className='genaImage' src='https://i.imgur.com/tYvNnwi.jpg'/>
              </div>

              <div className='genaDescription'>
                <p className='genaTitle'>Gennadiy Gorelik</p>
                <p className='genaText'>Coming over from Belarus in 1994, Gennadiy has been working in the industry for over 30 years. He opened G & V 
                to offer fair prices, as well as excellent service to the entire community.</p>
              </div>
            </div>
          </div>


          <div className='vladBackground'>
            <div className='vladContainer'>
              <div className='vladDescription'>
                <p className='vladTitle'>Vlad Shakov</p>
                <p className='vladText'>After finishing an auto-technical school in Belarus, Vlad had come over to New York in 1999. His attention to detail,
                as well as his accumulated expertise for over 25 years makes him an extremely skillful mechanic, and great owner.</p> 
              </div>

              <div className='vladPicture'>
                <img className='vladImage' src='https://i.imgur.com/Ymt0Jbm.jpg'/>
              </div>
            </div>
          </div>

        </div>

        <div className='mobileText'>Mobile Coming Soon...</div>

        <Footer />
      </div>
    )
  }
}

export default Home