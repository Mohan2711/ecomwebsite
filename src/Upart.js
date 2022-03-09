import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Upart() {
  return (
    <section>
      <Navpart />
      <Rowfunc />
    </section>
  );
}

function Navpart() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" id="brand" href="">
          Ecom
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#footer">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cta">
                Download
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
function Rowfunc() {
  return (
    <div className="row">
      <div className="col-lg-6">
        <h1 className="Big-heading">Meet new and interesting dogs nearby.</h1>
        <button type="button" className="btn btn-dark btn-lg download-button">
          <i className="fab fa-apple"></i> Download
        </button>
        <button
          type="button"
          className="btn btn-outline-light btn-lg download-button"
        >
          <i className="fab fa-google-play"></i> Download
        </button>
      </div>

      <div className="col-lg-6">
        <img
          className="title-image"
          src="https://media.istockphoto.com/photos/handicraft-packaging-from-natural-product-picture-id1309646840?b=1&k=20&m=1309646840&s=170667a&w=0&h=lsa6X7-sdxkbhtQsT0_MpqXiRCJ-x26Te6SgPhYelgU="
          alt="iphone-mockup"
        />
      </div>
    </div>
  );
}
