import { useEffect, useState } from "react";
import "./Footer.css";
import logoWhite from "../../assest/logoWhite.svg";
import { Link } from "react-router-dom";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import telegramLogo from "../../assest/telegramLogo.svg";
import instagramLogo from "../../assest/instagramLogo.svg";

function Footer() {
  const [link, setLink] = useState("/courses/");

  useEffect(() => {
    if (window.location.href.includes("/courses/")) {
      setLink("");
    }
    console.log("hey");
  }, [window.location.href]);
  return (
    <>
      <div className="footer row">
        <div className="col footer-item footer-logo">
          <img src={logoWhite} alt="" />
          <h2>انجمن علمی مهندسی کامپیوتر دانشگاه رازی کرمانشاه</h2>
          <div className="communications">
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKjRTBRkldXVdFPTfVbjXGtvrrVFfBFNxWRQRbBJWkPKWkCRHfQwBKJtJQBkQHKhsKKGTdC"
              target="_blank"
              rel="noreferrer"
            >
              <AlternateEmailRoundedIcon />
            </a>
            <a href="https://t.me/Razi_CES" target="_blank" rel="noreferrer">
              <img src={telegramLogo} alt="" />
            </a>
            <a
              href="https://instagram.com/Razi_CES"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagramLogo} alt="" />
            </a>
          </div>
        </div>
        <div className="col footer-item">
          <h3>آخرین مطالب</h3>
          <ul>
            <li>
              <Link to={`${link}icdl`} replace="true" className="link">
                برگزاری دوره ICDL
              </Link>
            </li>
            <li>
              <Link to={`${link}wordpress`} replace="true" className="link">
                برگزاری دوره WordPress
              </Link>
            </li>
            <li>
              <a
                className="link"
                href="https://yun.ir/RaziCES4"
                className="link"
                target="_blank"
              >
                شرکت در نیازسنجی
              </a>
            </li>
            <li>
              <a
                href={"http://yun.ir/RaziCES1"}
                target="_blank"
                className="link"
              >
                همکاری با ما
              </a>
            </li>
            <li>
              <a
                href={
                  "https://docs.google.com/forms/d/e/1FAIpQLSeXpsDmrJvzdz2QoYcF-kWlWHmtGZNGX-7ZhFDKoK5-zBNMvQ/viewform"
                }
                target="_blank"
                className="link"
              >
                ثبت نظرات، پیشنهادات و انتقادات
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <h4>
          تمامی حقوق این وبسایت متعلق به انجمن علمی مهندسی کامپیوتر دانشگاه رازی
          می&zwnj;باشد.
        </h4>
      </div>
    </>
  );
}

export default Footer;
