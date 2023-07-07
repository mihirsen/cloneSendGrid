import React from "react";
import logo from "../Assests/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Products from "./Products";
import WhySendGrid from "./WhySendGrid";
import Developers from "../Components/Developers";
import Resources from "../Components/Resources";
import ContactUs from "../Components/ContactUs";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const [showMenu, setShowMenu] = useState(false);
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    {
      isMobile ? setShowMenu(false) : setShowMenu(false);
    }
    setShowComponent(!showComponent);
    setShowComponent1(false);
    setShowComponent2(false);
    setShowComponent3(false);
    setShowComponent4(false);
  };
  const [showComponent1, setShowComponent1] = useState(false);

  const handleClick1 = () => {
    {
      isMobile ? setShowMenu(false) : setShowMenu(false);
    }
    setShowComponent(false);
    setShowComponent2(false);
    setShowComponent3(false);
    setShowComponent4(false);
    setShowComponent1(!showComponent1);
  };
  const [showComponent2, setShowComponent2] = useState(false);

  const handleClick2 = () => {
    {
      isMobile ? setShowMenu(false) : setShowMenu(false);
    }
    setShowComponent(false);
    setShowComponent1(false);
    setShowComponent3(false);
    setShowComponent4(false);
    setShowComponent2(!showComponent2);
  };
  const [showComponent3, setShowComponent3] = useState(false);

  const handleClick3 = () => {
    {
      isMobile ? setShowMenu(false) : setShowMenu(false);
    }
    setShowComponent(false);
    setShowComponent1(false);
    setShowComponent2(false);
    setShowComponent4(false);
    setShowComponent3(!showComponent3);
  };
  const [showComponent4, setShowComponent4] = useState(false);

  const handleClick4 = () => {
    {
      isMobile ? setShowMenu(false) : setShowMenu(false);
    }
    setShowComponent(false);
    setShowComponent1(false);
    setShowComponent2(false);
    setShowComponent3(false);
    setShowComponent4(!showComponent4);
  };

  return (
    <div className="Navbar">
      {isMobile ? (
        <div>
          {showComponent && <Products />}
          {showComponent1 && <WhySendGrid />}
          {showComponent2 && <Resources />}
          {showComponent3 && <Developers />}
          {showComponent4 && <ContactUs />}
        </div>
      ) : (
        <div>
          {showComponent && <Products />}
          {showComponent1 && <WhySendGrid />}
          {showComponent2 && <Resources />}
          {showComponent3 && <Developers />}
          {showComponent4 && <ContactUs />}
        </div>
      )}
      <div className="Navbar-items2">
        <img src={logo} alt="Logo" id="logo" />
      </div>
      <div className="Navbar-items">
        <ul id={showMenu ? "navbar-mobile" : "navbar"}>
          <li>
            <a className="nav-links" onClick={handleClick}>
              Products
            </a>
          </li>
          <li>
            <a className="nav-links" onClick={handleClick1}>
              Why SendGrid
            </a>
          </li>
          <li>
            <a className="nav-links" onClick={handleClick2}>
              Resources
            </a>
          </li>
          <li>
            <a className="nav-links" onClick={handleClick3}>
              Developers
            </a>
          </li>
          <li>
            <a className="nav-links" onClick={handleClick}>
              Pricing
            </a>
          </li>
          <li id="navbar-right">
            <a className="nav-links" onClick={handleClick4}>
              Contact Us
            </a>
          </li>
          <Link to="./SignIn" id="link">
            <li>
              <a className="nav-links">Sign In</a>
            </li>
          </Link>
          <span id="start-btn">Start for free</span>
          <button id="start-btn1">Start for free</button>
        </ul>
        <div className="hamburger-menu" onClick={() => setShowMenu(!showMenu)}>
          Menu
        </div>
      </div>
    </div>
  );
};

export default Navbar;
