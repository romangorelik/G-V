import React from 'react'

/* Components */
import Header from './Header.jsx'

class Services extends React.Component {
  state = {
    arr: 'ajkfdklgnlkdsnglsdbgdsbgskdlgndlsknglsdngndslkgnldsngfndslgdsnglnsdlgnlsdngldslgndsnglsdnglks'.split('')
  }
  render () {
    return (
      <div>
        <Header/>
        <div className='service'> 
          {this.state.arr.map(x => {
            return (
              <div>
                {x}
              </div>
            )
          })} 
        </div>
      </div>
    )
  }
}

export default Services