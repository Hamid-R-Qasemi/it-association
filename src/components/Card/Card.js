import React, { useState } from "react";
import PrimaryButton from "../Button/PrimaryButton";
import classes from "./Card.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import UnloadedImage from "../UnloadedImage/UnloadedImage";
import { Link } from "react-router-dom";

function Card(props) {
  const [loaded, setLoaded] = useState(false);
  const imageLoadHandler = (e) => {
    setLoaded(true);
    e.target.closest("span").classList.add("lazy-load-image-loaded");
  };

  return (
    <div className={classes.card}>
      {props.img && (
        // <img
        //   src={props.img}
        //   alt={props.img}
        //   className={classes.image}
        //   loading={"lazy"}
        // />
        <div className={classes["image-container"]}>
          {!loaded && <UnloadedImage></UnloadedImage>}
          <LazyLoadImage
            src={props.img}
            alt={props.img}
            className={classes.image}
            effect="blur"
            onLoad={imageLoadHandler}
          />
        </div>
      )}
      <h3 className={classes.title}>{props.title}</h3>
      {props.description && (
        <p className={classes.description}>{props.description}</p>
      )}
      {props.button && (
        <PrimaryButton href={props.href} target={props.target}>
          {props.link ? (
            <Link to={props.link}>{props.button}</Link>
          ) : (
            <>{props.button}</>
          )}
        </PrimaryButton>
      )}
    </div>
  );
}

export default Card;
