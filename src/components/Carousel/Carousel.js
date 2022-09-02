import "./Carousel.css";
import { slides } from "./slideContent";
import Slide from "./Slide";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { useState } from "react";

function Carousel() {
  const [current, setCurrent] = useState(0);

  const length = slides.length;
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const prevSlideHandler = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextSlideHandler = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const dotClickHandler = (index) => {
    setCurrent(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {slides.map((slide, i) => {
          return (
            <>
              <div className={i === current ? "slide active" : "slide"} key={i}>
                {i === current && (
                  <Slide
                    img={slide.portrate}
                    alt={slide.portrate}
                    writer={slide.name}
                    description={slide.content}
                  />
                )}
              </div>
            </>
          );
        })}
        <div className="dots">
          {slides.map((slide, i) => {
            return (
              <div
                className={`${i === current ? "dot active" : "dot"}`}
                onClick={() => dotClickHandler(i)}
              ></div>
            );
          })}
        </div>

        <div className="arrow arrow-left">
          <KeyboardArrowLeftRoundedIcon onClick={nextSlideHandler} />
        </div>
        <div className="arrow arrow-right">
          <KeyboardArrowRightRoundedIcon onClick={prevSlideHandler} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
