import logo from "../images/logo.svg";
import menu from "../images/icon-menu.svg";
import menuClose from "../images/icon-menu-close.svg";
import { useState } from "react";

export default function Heading() {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <header className="header">
        <img src={logo} alt="logo" className="header__logo" />
        <img
          onClick={() => setClicked((prev) => !prev)}
          src={clicked ? menuClose : menu}
          alt="Menu"
          className="header__menu"
        />
        <nav className={clicked ? "header__nav show" : "header__nav"}>
          <a href="#0" className="header__nav--home">
            Home
          </a>
          <a href="#0" className="header__nav--new">
            New
          </a>
          <a href="#0" className="header__nav--popular">
            Popular
          </a>
          <a href="#0" className="header__nav--trending">
            Trending
          </a>
          <a href="#0" className="header__nav--categories">
            Categories
          </a>
        </nav>
      </header>
    </>
  );
}
