import hero from "../images/image-web-3-mobile.jpg";
import heroDesktop from "../images/image-web-3-desktop.jpg";

import New from "./New";
import Article from "./Article";

export default function Main(props) {
  const { homeRef, newRef, popularRef } = props;
  return (
    <>
      <main ref={homeRef} className="main">
        <div className="main__hero">
          <picture>
            <source srcSet={heroDesktop} media="(min-width: 1110px)"></source>
            <img src={hero} alt="hero" className="main__hero--img" />
          </picture>
        </div>
        <div className="main__headline">
          <h1>The Bright Future of Web 3.0?</h1>
        </div>
        <div className="main__cta">
          <p className="main__cta--text">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="main__cta--btn">Read more</button>
        </div>
        <New newRef={newRef} />
      </main>
      <Article articleRef={popularRef} />
    </>
  );
}
