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
        <div className="card-img-overlay mt-5 pt-5">
          <div className="container">
            <h5 className="card-title display-3 fw-bold mb-3">Full Stack Developer</h5>
            <i className="fas fa-gem me-3 fs-3" />
            <i className="fab fa-js-square me-3 fs-3" />
            <i className="fab fa-html5 me-3 fs-3" />
            <i className="fab fa-css3-alt me-3 fs-3" />
            <i className="fab fa-react me-3 fs-3 mb-3" />
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
