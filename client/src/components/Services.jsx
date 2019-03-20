import React from 'react'

/* Components */
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

class Services extends React.Component {
  state = {
    services1: [
      {name: "Oil Change", price: "Based on oil", time: "20 minutes"},
      {name: "Flat tire", price: "$15.00", time: "5 minutes"},
      {name: "Change tires", price: "$100.00", time: "1 hour"},
      {name: "Oil Change", price: "Based on oil", time: "20 minutes"},
      {name: "Flat tire", price: "$15.00", time: "5 minutes"},
      {name: "Change tires", price: "$100.00", time: "1 hour"}
    ],
    services2: [

    ]
  }
  render () {
    return (
      <div>
        <Navbar/>
        <div className='service'> 
          <div className='serviceContainer'>

            <div className='firstContainer'>
              {this.state.services1.map((x, k) => {
                return (
                  <div key={k}>
                    <p className='serviceName'>{x.name}</p>
                    <p className='servicePrice'>{x.price}</p>
                    <p className='serviceTime'>{x.time}</p>
                    <br/>
                    <br/>
                  </div>
                )
              })}
            </div>

            <div className='secondContainer'>
              {this.state.services2.map((x, k) => {
                return (
                  <div key={k}>
                    <p className='serviceName'>{x.name}</p>
                    <p className='servicePrice'>{x.price}</p>
                    <p className='serviceTime'>{x.time}</p>
                    <br/>
                    <br/>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Services