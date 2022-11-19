import hero from "../images/image-web-3-mobile.jpg";
import heroDesktop from "../images/image-web-3-desktop.jpg";
import retropc from "../images/image-retro-pcs.jpg";
import laptop from "../images/image-top-laptops.jpg";
import gaming from "../images/image-gaming-growth.jpg";

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
        <div ref={newRef} className="main__new">
          <h2 className="main__new--headline">New</h2>
          <div className="main__new--item">
            <h3 className="main__new--item-headline">
              Hydrogen VS Electric Cars
            </h3>
            <p className="main__new--item-text">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>
          <div className="main__new--item">
            <h3 className="main__new--item-headline">
              The Downsides of AI Artistry
            </h3>
            <p className="main__new--item-text">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div className="main__new--item">
            <h3 className="main__new--item-headline">
              Is VC Funding Drying Up?
            </h3>
            <p className="main__new--item-text">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
        <div ref={popularRef} className="main__article">
          <img src={retropc} alt="Retro pc" className="main__article--img" />
          <p className="main__article--index">01</p>
          <h4 className="main__article--headline">Reviving Retro PCs</h4>
          <p className="main__article--text">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
        <div className="main__article">
          <img src={laptop} alt="Laptop" className="main__article--img" />
          <p className="main__article--index">02</p>
          <h4 className="main__article--headline">Top 10 Laptops of 2022</h4>
          <p className="main__article--text">
            Our best picks for various needs and budgets.
          </p>
        </div>
        <div className="main__article">
          <img src={gaming} alt="Gaming" className="main__article--img" />
          <p className="main__article--index">03</p>
          <h4 className="main__article--headline">The Growth of Gaming</h4>
          <p className="main__article--text">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </main>
    </>
  );
}
