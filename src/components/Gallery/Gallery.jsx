import React, { useState, useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "./Gallery.css";

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import image6 from "../../assets/winner-2.jpg";
import image7 from "../../assets/winner-3.jpg";
import image8 from "../../assets/winner-4.jpg";
import image9 from "../../assets/winner-5.jpg";
import img1 from "../../assets/winner-6.jpg";

const Gallery = () => {
  const slides = [
    {
      src: image6,
      alt: "",
    },
    {
      src: image7,
      alt: "",
    },
    {
      src: image8,
      alt: "",
    },
    {
      src: image9,
      alt: "",
    },
    {
      src: img1,
      alt: "",
    },
  ];

  useEffect(() => {
    const mySwiper = new Swiper(".swiper-container", {
      loop: true,
      navigation: {
        nextEl: ".arrow-right",
        prevEl: ".arrow-left",
      },
    });
  }, []);

  return (
    <div className="gallery">
      <h2 className="left-side-container">NCUC'23 Diary</h2>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {slides.map((item, idx) => (
            <div key={idx} className="swiper-slide">
              <img src={item.src} alt={item.alt} className="slide" />
            </div>
          ))}
        </div>
        <div className="arrow arrow-left">
          <BsArrowLeftCircleFill />
        </div>
        <div className="arrow arrow-right">
          <BsArrowRightCircleFill />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
