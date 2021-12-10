import React from 'react';

function navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand fw-bolder fs-4" href="/#">Andres Castañeda</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">Pricing</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="/#">Action</a></li>
                <li><a className="dropdown-item" href="/#">Another action</a></li>
                <li><a className="dropdown-item" href="/#">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <div className="buttons">
            <a href="/#" className="btn btn-outline-light me-2">
              <i className="fas fa-sign-in-alt me-2" />
              Login
            </a>
            <a href="/#" className="btn btn-outline-light me-2">
              <i className="fas fa-user-plus me-2" />
              Register
            </a>
            <a href="/#" className="btn btn-outline-light me-2">
              <i className="fas fa-shopping-cart me-2" />
              Cart(0)
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
