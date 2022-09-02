import React, { useEffect } from "react";
import classes from "./Courses.module.css";
import { courses } from "./courseData";
import { useParams } from "react-router-dom";
import PrimaryButton from "../../Button/PrimaryButton";

function Courses() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const params = useParams().something;
  const data = courses[params];

  return (
    <>
      <div className={classes.hero}>
        <img
          className={classes["hero-banner"]}
          src={`/image/courses/${data.img}`}
          alt=""
        />
        <div className={classes.wrapper}>
          <div className={classes.content}>
            <h1>{data.heroTitle}</h1>
          </div>
        </div>
      </div>
      <h1 className={classes.heading}>{data.title}</h1>
      <div className={classes.description}>
        <span>{data.description}</span>
        <br />
        <PrimaryButton href={"http://" + data.registrationLink} target="_blank">
          پیش ثبت نام در دوره
        </PrimaryButton>
      </div>
    </>
  );
}

export default Courses;
