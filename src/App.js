import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Fragment, useState } from "react";
import HomePage from "./components/Pages/HomePage/HomePage";
import Course from "./components/Pages/SecondaryPages/Course";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Success from "./components/LoadingScreen/Success";
import GoTop from "./components/UI/GoTop/GoTop";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [loadingScreen, setLoadingScreen] = useState(<LoadingScreen />);

  window.addEventListener("load", () => {
    setLoadingScreen(<Success />);
    setTimeout(() => {
      setLoaded(true);
    }, 1600);
  });
  return (
    <Fragment>
      {!loaded ? loadingScreen : ""}
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/courses/:something">
          <Course />
        </Route>

        {/* <Route path="/courses/wordpress">
          <WordPress />
        </Route> */}
      </Switch>
      <Footer />
      {loaded && <GoTop></GoTop>}
    </Fragment>
  );
}

export default App;
