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

    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },

      {
        breakpoint: 425,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },

      {
        breakpoint: 375,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },

      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },

   

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };


  return (
    <div className='carousel overflow-hidden'>
      <div className='container'>
        <div className='carousel-header'><span>Our Most Popular Airlinr Partners</span></div>
        <Slider {...settings}>

          <div >
            <img className='border-0' src={c1} class="img-thumbnail" alt="..." />
          </div>

          <div >
            <img className='border-0' src={c2} class="img-thumbnail" alt="..." />
          </div>

          <div >
            <img className='border-0' src={c3} class="img-thumbnail" alt="..." />
          </div>

          <div >
            <img className='border-0' src={c4} class="img-thumbnail" alt="..." />
          </div>

          <div >
            <img className='border-0' src={c5} class="img-thumbnail" alt="..." />
          </div>

          <div >
            <img className='border-0' src={c6} class="img-thumbnail" alt="..." />
          </div>




        </Slider>
      </div>
    </div>
  );
};

export default Carousel;