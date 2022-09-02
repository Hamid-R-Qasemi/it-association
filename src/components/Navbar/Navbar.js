import "./Navbar.css";
import { HashLink as Link } from "react-router-hash-link";
import logoBlack from "../../assest/logoBlack.svg";
import logoWhite from "../../assest/logoWhite.svg";
import { useState } from "react";

function MainNavbar() {
  const [button, setButton] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const [navbarVisible, setNavbarVisible] = useState(false);

  window.addEventListener("load", function () {
    this.innerWidth <= 960 ? setButton(true) : setButton(false);
  });

  let lastScrollTop = 0;
  window.addEventListener("scroll", function (e) {
    const st = window.pageYOffset;
    if (st < lastScrollTop) {
      document.querySelector(".navbar").style.transform = "translateY(0px)";
      if (st <= 1 && navbarVisible) {
        setNavbarVisible(false);
      }
    } else {
      if (st > 400) {
        document.querySelector(".navbar").style.transform =
          "translateY(-130px)";
      }
      if (st > 500) {
        setNavbarVisible(true);
      }
    }
    lastScrollTop = st;
    if (collapsed) {
      setCollapsed(true);
    }
  });

  const mobileMenuButtonHandler = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="navbar-container">
      <nav className={navbarVisible ? "navbar visible" : "navbar"}>
        {button ? (
          // <button onClick={mobileMenuButtonHandler} className={"menu-button"}>
          //   {collapsed ? (
          //     <MenuRoundedIcon sx={{ fontSize: 40 }} />
          //   ) : (
          //     <CloseRoundedIcon sx={{ fontSize: 40 }} />
          //   )}
          // </button>
          <div
            className={`menu-button ${!collapsed ? "active" : ""}`}
            onClick={mobileMenuButtonHandler}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : (
          ""
        )}

        <ul
          className={`${
            collapsed ? "nav-items" : `${"nav-items"} ${"active"}`
          }`}
        >
          <li className={"nav-item"}>
            <Link to="/#" className="link">
              خانه
            </Link>
          </li>
          <li className={"nav-item"}>
            <Link to="/#courses" className="link">
              دوره ها
            </Link>
          </li>
          <li className={"nav-item"}>
            <Link to="/#survey" className="link">
              نظر سنجی ها
            </Link>
          </li>
          <li className={"nav-item"}>
            <Link to="/#about" className="link">
              درباره ما
            </Link>
          </li>
        </ul>

        <div className={"navbar_image-wrapper"}>
          {navbarVisible ? (
            button ? (
              <img src={logoWhite} alt="logo" />
            ) : (
              <img src={logoBlack} alt="logo" />
            )
          ) : button ? (
            <img src={logoWhite} alt="logo" />
          ) : (
            <img src={logoWhite} alt="logo" />
          )}
        </div>
      </nav>
    </div>
  );
}

export default MainNavbar;
