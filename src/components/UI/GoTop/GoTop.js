import React, { useState } from "react";
import RocketSvg from "../../../assest/rocketSvg.svg";
import "./GoTop.css";

function GoTop() {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 500) {
      setVisible(true);
    } else if (window.pageYOffset < 100) {
      setVisible(false);
    }
  });
  return (
    <a
      className="go-top"
      href="#"
      style={
        visible
          ? { transform: "translateY(0px)" }
          : { transform: "translateY(100px)" }
      }
    >
      <img src={RocketSvg} alt="" />
    </a>
  );
}

export default GoTop;
