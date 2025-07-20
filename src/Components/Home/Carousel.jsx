import React from "react";
import Slider from "react-slick";
import state from "../../assets/WAL_4307.jpg";
import amusementpark from "../../assets/WAL_4316.jpg";
import damn from "../../assets/WAL_4318.jpg";
import internationcenter from "../../assets/WAL_4325.jpg";
import oopl from "../../assets/WAL_4305.jpg";
import park from "../../assets/WAL_4320.jpg";
import trainstation from "../../assets/WAL_4322.jpg";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const images = [
    state,
    amusementpark,
    damn,
    internationcenter,
    oopl,
    park,
    trainstation,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="carousel-wrapper">
      <div className="title">
        <h1>Ipokia Local Government at a Glance</h1>
      </div>

      <Slider {...settings} className="carousel-slider">
        {images.map((src, index) => (
          <div key={index} className="carousel-slide">
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
