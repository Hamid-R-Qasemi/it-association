import React from "react";
import classes from "./UnloadedImage.module.css";
import InsertPhotoRoundedIcon from "@mui/icons-material/InsertPhotoRounded";

function UnloadedImage(props) {
  return (
    <div className={`${classes.shade} ${props.className}`}>
      <InsertPhotoRoundedIcon className={classes["img-icon"]} />
    </div>
  );
}

export default UnloadedImage;
