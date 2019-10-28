import React from "react";
import Swiper from "react-id-swiper";
import { CarouselImageBox, CarouselImage } from "./carouselStyle";

import { carouselImages } from "./images";

function Carousel() {
  const renderImages = carouselImages.map((image, index) => (
    <CarouselImage key={index} imageSrc={image.src} />
  ));

  const params = {
    slidesPerView: 1,
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false
    }
  };

  return (
    <CarouselImageBox>
      <Swiper {...params}>{renderImages}</Swiper>
    </CarouselImageBox>
  );
}

export default Carousel;
