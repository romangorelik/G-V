import React from 'react'

class Footer extends React.Component {
  state = {
    year: new Date().getFullYear()
  }

  render () {
    return (
      <footer>
          <div className='map'>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe width="300" height="185" id="gmap_canvas"
                src={`https://maps.google.com/maps?q=G%20V%20Auto%20Clinic&output=embed`}>
                </iframe>
              </div>
            </div>
          </div>

          <div>
            <img className='logo' src='https://www.freelogodesign.org/Content/img/logo-ex-7.png'/>
          </div>

          <div className='contactInfo'>
            <a href="tel:+17186335863"><pre><i className="fas fa-phone"></i>  718 - 633 - 5863</pre></a>
            <hr/>
            <pre><i className="fas fa-building"></i>  Sunday - Friday | 9AM - 6PM</pre>
            <hr/>
            <a href="https://www.google.com/maps/place/G+%26+V+Auto+Clinic/@40.6412026,-73.9845766,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25b2a02f54247:0xc452c7425cf20949!8m2!3d40.6411986!4d-73.9823879" target="_blank"><pre><i className="fas fa-map-marked-alt"></i>  1371 36th St, Brooklyn, NY 11218</pre></a>
            <br/>
            <br/>
            <pre>Roman Gorelik © {this.state.year}</pre>
          </div>
        </footer>
    )
  }
}

export default Footer