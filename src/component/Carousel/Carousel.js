import React from 'react';
import Slider from "react-slick";
import './Carousel.css'


import c1 from '../../image/c1.png'
import c2 from '../../image/c2.png'
import c3 from '../../image/c3.png'
import c4 from '../../image/c4.png'
import c5 from '../../image/c5.png'
import c6 from '../../image/c6.jpg'
import c7 from '../../image/c7.png'

const Carousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };


    return (
        <div className='carousel'>
    <div className='container'>
        
        <Slider {...settings}>

          <div >
          <img src={c1} class="img-thumbnail" alt="..." />
          </div>

          <div >
          <img src={c2} class="img-thumbnail" alt="..." />
          </div>

          <div >
          <img src={c3} class="img-thumbnail" alt="..." />
          </div>

          <div >
          <img src={c4} class="img-thumbnail" alt="..." />
          </div>

          <div >
          <img src={c5} class="img-thumbnail" alt="..." />
          </div>

          <div >
          <img src={c6} class="img-thumbnail" alt="..." />
          </div>
          



        </Slider>
      </div>
        </div>
    );
};

export default Carousel;