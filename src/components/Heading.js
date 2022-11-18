import logo from "../images/logo.svg";

export default function Heading() {
  return (
    <>
      <header className="heading">
        <img src={logo} alt="logo" className="heading__logo" />
        <nav className="header__nav">
          <a href="#" className="header__nav--home">
            Home
          </a>
          <a href="#" className="header__nav--new">
            New
          </a>
          <a href="#" className="header__nav--popular">
            Popular
          </a>
          <a href="#" className="header__nav--trending">
            Trending
          </a>
          <a href="#" className="header__nav--categories">
            Categories
          </a>
        </nav>
      </header>
    </>
  );
}
