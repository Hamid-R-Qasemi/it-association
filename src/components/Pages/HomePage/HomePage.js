import React from "react";
import classes from "./HomePage.module.css";
import { homeSecData, membersData, courses, surveys } from "./HomePageData";
import Section from "./Section";
import Carousel from "../../Carousel/Carousel";
import Card from "../../Card/Card";
import SecondaryButton from "../../Button/SecondaryButton";
import VolunteersTable from "../../Table/VolunteersTable";
import Anchor from "../../Anchor/Anchor";
import PrimaryButton from "../../Button/PrimaryButton";
import HomePageHero from "./HomePageHero/HomePageHero";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import telegramLogo from "../../../assest/telegramLogoBlack.svg";
import instagramLogo from "../../../assest/instagramLogoBlack.svg";

export default function HomePage() {
  return (
    <>
      <HomePageHero />
      <div className={classes.container}>
        <h1 className={classes.heading}>
          توی این دوره چه کار هایی رو میخوایم انجام بدیم؟
          <Anchor id={"home"} />
        </h1>

        {homeSecData.map((item, index) => {
          return <Section {...item} key={index} />;
        })}
        <h1 className={classes.heading}>نظرات شما کاربران عزیز</h1>
        <Carousel></Carousel>
        <div className={classes.comments}>
          <h2>لطفا شما هم نظراتتون رو با ما به اشتراک بذارید!</h2>
          <PrimaryButton
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLSeXpsDmrJvzdz2QoYcF-kWlWHmtGZNGX-7ZhFDKoK5-zBNMvQ/viewform"
            }
            target="_blank"
          >
            ثبت نظر
          </PrimaryButton>
        </div>

        <h1 className={classes.heading}>
          <Anchor id={"courses"} />
          دوره ها
        </h1>
        <div className={classes.courses}>
          {courses.map((item, index) => {
            return (
              <Card
                img={item.img}
                title={item.title}
                description={item.description}
                button={item.button}
                link={item.pageLink}
                key={index}
              />
            );
          })}
        </div>
        <h1 className={classes.heading}>
          <Anchor id={"survey"} />
          نظر سنجی ها
        </h1>
        <div className={classes.courses}>
          {surveys.map((item, index) => {
            return (
              <Card
                img={item.img}
                title={item.title}
                description={item.description}
                button={item.button}
                href={item.href}
                key={index}
                target="_blank"
              />
            );
          })}
        </div>

        <h1 className={classes.heading}>
          درباره ما
          <Anchor id={"about"} />
        </h1>
        <div className={classes.about}>
          <div className={classes.description}>
            <h3>انجمن علمی مهندسی کامپیوتر</h3>
            <span>
              یک متن درباره انجمن علمی مهندسی کامپیوتر یک متن درباره انجمن علمی
              مهندسی کامپیوتر یک متن درباره انجمن علمی مهندسی کامپیوتر{" "}
            </span>
          </div>
          <div className={classes.communication}>
            <h3>راه های ارتباطی</h3>
            <span>
              <a
                href="mailto:Razi.CES00@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <p>ایمیل</p>
                <AlternateEmailRoundedIcon />
              </a>
            </span>
            <span>
              <a href="https://t.me/Razi_CES" target="_blank" rel="noreferrer">
                <p>تلگرام</p>
                <img src={telegramLogo} alt="" />
              </a>
            </span>
            <span>
              <a
                href="https://instagram.com/Razi_CES"
                target="_blank"
                rel="noreferrer"
              >
                <p>اینستاگرام</p>
                <img src={instagramLogo} alt="" />
              </a>
            </span>
          </div>
        </div>

        <h1 className={classes.heading}>اعضای این دوره انجمن</h1>
        <div className={classes.members}>
          {membersData.map((item, index) => {
            return (
              <Card
                img={item.img}
                title={item.title}
                description={item.description}
                key={index}
              />
            );
          })}
        </div>
        <div className={classes["video-frame"]}>
          <iframe
            src="https://www.aparat.com/video/video/embed/videohash/KmFf5/vt/frame"
            title="فراخوان همکاری انجمن مهندسی کامپیوتر رازی"
            allowFullScreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          ></iframe>
        </div>
        <h1 className={classes.heading}>
          دوستانی که در این دوره همراه ما هستن
        </h1>
        <VolunteersTable />
        <div className={classes["pre-footer"]}>
          <div className={classes["pre-footer-content"]}>
            <h1>میخواید توی این مسیر همراه ما باشید؟</h1>
            <SecondaryButton href={"http://yun.ir/RaziCES1"} target="_blank">
              همین حالا ثبت نام کنید!
            </SecondaryButton>
          </div>
        </div>
      </div>
    </>
  );
}
