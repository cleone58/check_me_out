import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Navigation } from './components/app.js'
import { Header } from './components/app.js'
import { Gallery } from './components/app.js'
import { ContactForm } from './components/app.js'
import { Footer, Social, Link, Blog } from './components/app.js'


class App extends Component {
  render() {
    return(
        <div>

          <Navigation />


          <div id="section1">
            <Header />
          </div>
          <div id="section2">
            <Gallery />






              </div>
              <div id="section3">
                <section id="services-area" className="services-section">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12 text-center inner our-service">
                        <div className="service">
                          <h1>About Me</h1>
                          <p>Technology and Sports are two major passion of mine, I feel combining both these passions are a match made in heaven. <br/>
                             As a Front End Developer with a deep interest with the React Ecosystem my aim is to continue to level up on my skills, continue to create really cool apps, <br/>
                            and spread my knowledge to anybody who is interested in getting into Computer Programming.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                    <Blog />





                </div>
                <div id="section4">
                  <section id="contact-area" className="contact-section">
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-12 text-center inner">
                          <div className="contact-content">
                            <h1>contact form</h1>
                            <div className="row">
                              <div className="col-sm-12">
                                <p>For Web Development enquires whether it be projects, freelance gigs, job opportunities etc. <br/>
                                  feel free to drop me a line, or you can hit me up via my social media feeds below. <br/>
                                </p>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <ContactForm />
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div className="social">
                    <a class="rotationButton" href="https://github.com/cleone58"><Social styles="social-button"  image="http://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/embed/public/2014/04/22/github-logo.png"/> </a>
                    <a class="rotationButton"  href="https://www.linkedin.com/in/cleonejacobsr/"> <Social styles="social-button"  image="https://image.flaticon.com/icons/svg/61/61109.svg" /></a>
                  </div>
                  <Footer />

                </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
