import Lottie from "react-lottie-player";
import * as loadingScreen from "../../assest/Loading/loadingScreen.json";
import classes from "./LoadingScreen.module.css";

function LoadingScreen() {
  return (
    <>
      <div className={classes["loading-screen"]}>
        <Lottie
          loop
          animationData={loadingScreen}
          play
          style={{ width: 150, height: 150 }}
        />
      </div>
    </>
  );
}

export default LoadingScreen;
