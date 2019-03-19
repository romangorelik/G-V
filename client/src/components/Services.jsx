import React from 'react'

/* Components */
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

class Services extends React.Component {
  state = {
    arr: 'ajkfdklgnlkdsnglsdbgdsbgskdlgndlsknglsdngndslkgnldsngfndslgdsnglnsdlgnlsdngldslgndsnglsdnglks'.split('')
  }
  render () {
    return (
      <div>
        <Navbar/>
        <div className='service'> 
          {this.state.arr.map(x => {
            return (
              <div>
                {x}
              </div>
            )
          })} 
        </div>
        <Footer />
      </div>
    )
  }
}

export default Services