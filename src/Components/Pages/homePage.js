import React, {Component} from 'react';
import Carousel from '../Carousel/carousel'
import CarouselForm from '../Carousel/carouselForm'

class HomePage extends Component{
  render(){
    return (
      <div>
        <Carousel/>
        <CarouselForm/>
      </div>
    );
  }
}

export default HomePage;
