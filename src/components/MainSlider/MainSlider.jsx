import React from "react";
import style from "./MainSlider.module.css";
import slide1 from "../../assets/image-1.jpg";
import slide2 from "../../assets/image-2.jpg";
import slide3 from "../../assets/image-3.jpg";
import slide4 from "../../assets/image-4.jpg";
import slide5 from "../../assets/image-5.jpg";
import Slider from "react-slick";
export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 1000,
  };

  return (
    <>
      <div className="row ">
        <div className="w-3/4">
          <Slider {...settings}>
            <img src={slide1} className="w-full object-cover" alt="" />
            <img src={slide4} className="w-full object-cover" alt="" />
            <img src={slide5} className="w-full object-cover" alt="" />
          </Slider>
        </div>

        <div className="w-1/4">
          <img src={slide2} className="w-full" alt="" />
          <img src={slide3} className="w-full" alt="" />
        </div>
      </div>
    </>
  );
}
