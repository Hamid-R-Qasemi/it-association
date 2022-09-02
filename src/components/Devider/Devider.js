import React from "react";
import classes from "./Devider.module.css";
import deviderSvg from "../../assest/deviderSvg.svg";

export default function Devider() {
  return (
    <div className={classes.devider}>
      <img src={deviderSvg} alt="" />
    </div>
  );
}
