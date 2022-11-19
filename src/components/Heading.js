import logo from "../images/logo.svg";
import menu from "../images/icon-menu.svg";
import menuClose from "../images/icon-menu-close.svg";

export default function Heading(props) {
  const { clicked, setClicked, homeRef, newRef, popularRef } = props;

  function scrollToSection(elementRef) {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  }

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
          <a
            onClick={() => scrollToSection(homeRef)}
            href="#0"
            className="header__nav--home"
          >
            Home
          </a>
          <a
            onClick={() => scrollToSection(newRef)}
            href="#0"
            className="header__nav--new"
          >
            New
          </a>
          <a
            onClick={() => scrollToSection(popularRef)}
            href="#0"
            className="header__nav--popular"
          >
            Popular
          </a>
          <a
            onClick={() => scrollToSection(popularRef)}
            href="#0"
            className="header__nav--trending"
          >
            Trending
          </a>
          <a
            onClick={() => scrollToSection(popularRef)}
            href="#0"
            className="header__nav--categories"
          >
            Categories
          </a>
        </nav>
        <div className={clicked ? "overlay" : "overlay hide"}></div>
      </header>
    </>
  );
}
