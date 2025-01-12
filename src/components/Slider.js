import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "./img/slide1.jpg";
import slide2 from "./img/slide2.jpg";
import slide3 from "./img/slide3.jpg";
import "./css/Slider.css";  // Make sure this points to the correct CSS file

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval={3000} // Slide every 3 seconds (3000ms)
      controls={true} // Show next/previous buttons
      indicators={true} // Show slide indicators
      fade={true} // Fade transition effect
    >
      <Carousel.Item>
        <div className="images">
          <img className="d-block w-100" src={slide1} alt="First slide" />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="images">
          <img className="d-block w-100" src={slide2} alt="Second slide" />
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="images">
          <img className="d-block w-100" src={slide3} alt="Third slide" />
        </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
