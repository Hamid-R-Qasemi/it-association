import React, { useState } from "react";
import "./Carousel.css";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import UnloadedImage from "../UnloadedImage/UnloadedImage";

function Slide({ img, alt, writer, description }) {
  const [loaded, setLoaded] = useState(false);
  const imageLoadHandler = (e) => {
    setLoaded(true);
    e.target.closest("span").classList.add("lazy-load-image-loaded");
  };
  return (
    <>
      <>
        <div className="image-wrapper">
          {!loaded && <UnloadedImage></UnloadedImage>}
          <LazyLoadImage
            src={img}
            alt={alt}
            effect="blur"
            onLoad={imageLoadHandler}
          ></LazyLoadImage>
        </div>
        <FormatQuoteRoundedIcon />
        <h2>{writer}</h2>
        <span>{description}</span>
      </>
    </>
  );
}

export default Slide;
