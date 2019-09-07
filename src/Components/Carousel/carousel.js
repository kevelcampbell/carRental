import React, {Component} from 'react';
import '../../Assets/CSS/Carousel/carousel.css'
import Carkeys from '../../Assets/Images/carkeys.jpeg';
import Highway from '../../Assets/Images/highway.jpeg';
import Hills from '../../Assets/Images/jamaicanhills.jpg';

class Carousel extends Component{
  render(){
    return (
      <div className="carousel slide carousel-fade" data-ride="carousel">
        <div className="carousel-inner homeCarousel">
          <div className="carousel-item">
              <img src={Carkeys} className="d-block w-100" alt="Car Keys by revac film's &amp; photography"/>
          </div>
          <div className="carousel-item">
              <img src={Highway} className="d-block w-100" alt="highway by Mike Bird"/>
          </div>
          <div className="carousel-item active">
              <img src={Hills} className="d-block w-100" alt="Hills of jamaica"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
