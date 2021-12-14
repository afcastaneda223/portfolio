import React from 'react';
import videos from './assets/ba2.mp4';

function Home() {
  return (
    <div className="main-cont">
      <div className="card bg-dark text-white border-0 rounded-0">
        <div>
          <video autoPlay="autoplay" loop="loop" muted className="img-cont">
            <source src={videos} type="video/mp4" />
          </video>
        </div>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container text-center">
            <h5 className="card-title display-3 fw-bold mb-3">Full Stack Developer</h5>
            <p className="card-text lead fs-4">Experienced Account Manager with a demonstrated history of working in the internet industry (Google Ads). Skilled in HTML Scripting, CSS, Ruby, Ruby on Rails, JavaScript, React, and Redux. Background in engineering with solid mathematics foundations.</p>
            <i className="fas fa-gem me-3 fs-3" />
            <i className="fab fa-js-square me-3 fs-3" />
            <i className="fab fa-html5 me-3 fs-3" />
            <i className="fab fa-css3-alt me-3 fs-3" />
            <i className="fab fa-react me-3 fs-3 mb-3" />
            <i className="fab fa-aws" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
