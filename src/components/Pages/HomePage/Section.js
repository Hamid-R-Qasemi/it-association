// import Link from "../../link/Link";
import React, { useState } from "react";
import classes from "./Section.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import UnloadedImage from "../../UnloadedImage/UnloadedImage";
function Section({ topLine, headline, description, img, alt, svg, imgStart }) {
  const [loaded, setLoaded] = useState(false);
  const imageLoadHandler = (e) => {
    setLoaded(true);
    e.target.closest("span").classList.add("lazy-load-image-loaded");
  };

  return (
    <div>
      <div className={`${classes.container} ${classes["home-page-content"]}`}>
        <div
          className={`${classes.row} ${classes["home__hero-row"]}`}
          style={{
            display: "flex",
            flexDirection: imgStart === "start" ? "row" : "row-reverse",
          }}
        >
          <div className={classes.col}>
            <div className={`${classes["home__hero-img-wrapper"]}`}>
              {!loaded && <UnloadedImage></UnloadedImage>}
              <LazyLoadImage
                src={`${img}`}
                alt={alt}
                className={classes["home__hero-img"]}
                effect="blur"
                onLoad={imageLoadHandler}
              />
            </div>
          </div>
          <div className={classes["svg"]}>
            <img src={svg} alt={svg} />
          </div>
          <div className={classes["col"]}>
            <div
              className={classes["home__hero-text-wrapper"]}
              style={{ marginRight: imgStart === "start" ? "auto" : "0px" }}
            >
              <h5 className={`${classes["top-line"]} link`}>{topLine}</h5>
              <h1>{headline}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
