import React from 'react'

export default (props)=> {
  return (
    <section id="feature-area" className="about-section">
      <div className="container">
        <div className="row text-center inner">
          <div className="col-sm-4">
            <div className="feature-content">
              <img src="img/the_know.jpeg" alt="Image"/>
              <h2 className="feature-content-title green-text">Bootstrap v3.3.6</h2>
              <p className="feature-content-description">Morbi sagittis justo a velit placerat ullamcorper quis quis velit. Sed convallis at risus ullamcorper auctor. Praesent quis velit neque. Quisque semper porta nisi vitae suscipit. Duis lectus magna, ornare ac scelerisque.
              </p>
              <a href="#" className="feature-content-link green-btn">button green</a>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="feature-content">
              <img src="img/my_weather.png" id="weather_app" alt="Image"/>
              <h2 className="feature-content-title blue-text">Responsive Design</h2>
              <p className="feature-content-description">Conquer Template is provided by templatemo for free of charge. You can use this template for any kind of website. No credit link is required. All images by <a href="http://unsplash.com" target="_parent">Unsplash</a>. Thank you for visiting our website. Please come again!</p>
              <a href="#" className="feature-content-link blue-btn">See Details</a>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="feature-content">
              <img src="img/1-3.jpg" alt="Image"/>
              <h2 className="feature-content-title red-text">Parallax Layout</h2>
              <p className="feature-content-description">Morbi sagittis justo a velit placerat ullamcorper quis quis velit. Sed convallis at risus ullamcorper auctor. Praesent quis velit neque. Quisque semper porta nisi vitae suscipit. Duis lectus magna, ornare ac scelerisque.
              </p>
              <a href="#" className="feature-content-link red-btn">Button Red</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
