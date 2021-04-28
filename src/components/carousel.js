import React, { useState } from "react";
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const items = [
  {
    src:
      "https://images.pexels.com/photos/6108392/pexels-photo-6108392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500/400x400",
  },
  {
    src:
      "https://images.unsplash.com/photo-1551314683-910ce92bed59?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjc1fHxwaG90b2dyYXBoZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60/500x500",
  },
  {
    src:
      "https://images.unsplash.com/photo-1518437042148-3e377ea057df?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHBob3RvZ3JhcGhlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60/500x500",
  },
];

const Slider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} height="370px" />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
    </Carousel>
  );
};

export default Slider;
