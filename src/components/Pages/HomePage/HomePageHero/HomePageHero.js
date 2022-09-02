import React from "react";
import classes from "./HomePageHero.module.css";
import heroImg from "../../../../assest/hero.jpg";
import heroSvg from "../../../../assest/heroSvg.svg";
import SecondaryButton from "../../../Button/SecondaryButton";

function HomePageHero() {
  return (
    <section className={classes.hero}>
      <img src={heroImg} alt="." className={classes["hero-banner"]} />
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <h1>انجمن علمی مهندسی کامپیوتر</h1>
          <span className={classes["text-content"]}>
            در این دوره از انجمن قصد داریم که به همراه شما دوستان عزیز، کلی
            کارهای جدید انجام بدیم! پس با ما همراه باشید تا بتونیم یک دوره خوب
            رو باهم داشته باشیم!
          </span>
          <SecondaryButton href={"#home"} target="_self">
            بزن بریم
          </SecondaryButton>
        </div>
        <img src={heroSvg} alt="" className={classes["hero-svg"]} />
      </div>
    </section>
  );
}

export default HomePageHero;
