import Lottie from "react-lottie-player";
import * as success from "../../assest/Loading/success.json";
import classes from "./LoadingScreen.module.css";

function LoadingScreen(props) {
  return (
    <>
      <div className={classes["loading-screen"]}>
        <Lottie
          loop
          animationData={success}
          play
          style={{ width: 150, height: 150 }}
        />
      </div>
    </>
  );
}

export default LoadingScreen;
