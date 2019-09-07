import React, { Component } from 'react';
import '../../Assets/CSS/Carousel/carousel.css'

class CarouselForm extends Component {
  render() {
    return (
      <div className="carouselForm">
        <div className="container">
          <form action="#" method="post" novalidate="novalidate">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                    <select className="form-control search-slt" id="location">
                      <option>Location</option>
                      <option>Example one</option>
                      <option>Example one</option>
                      <option>Example one</option>
                      <option>Example one</option>
                      <option>Example one</option>
                      <option>Example one</option>
                    </select>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                    <select className="form-control search-slt" id="make">
                      <option>Vehicle Make</option>
                      <option>Example one</option>
                      <option>Example one</option>
                      <option>Example one</option>
                      <option>Example one</option>
                      <option>Example one</option>
                      <option>Example one</option>
                    </select>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                    <select className="form-control search-slt" id="maxPrice">
                      <option>Max Price</option>
                      <option>Example one</option>
                      <option>Example one</option>
                      <option>Example one</option>
                      <option>Example one</option>
                      <option>Example one</option>
                      <option>Example one</option>
                    </select>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                    <button type="button" className="btn btn-danger wrn-btn">Search</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CarouselForm;
