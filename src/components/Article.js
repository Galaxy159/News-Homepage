import retropc from "../images/image-retro-pcs.jpg";
import laptop from "../images/image-top-laptops.jpg";
import gaming from "../images/image-gaming-growth.jpg";
export default function Article(props) {
  return (
    <>
      <div ref={props.articleRef} className="main__article">
        <div className="main__article--item">
          <img
            src={retropc}
            alt="Retro pc"
            className="main__article--item-img"
          />
          <p className="main__article--item-index">01</p>
          <h4 className="main__article--item-headline">Reviving Retro PCs</h4>
          <p className="main__article--item-text">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
        <div className="main__article--item">
          <img src={laptop} alt="Laptop" className="main__article--item-img" />
          <p className="main__article--item-index">02</p>
          <h4 className="main__article--item-headline">
            Top 10 Laptops of 2022
          </h4>
          <p className="main__article--item-text">
            Our best picks for various needs and budgets.
          </p>
        </div>
        <div className="main__article--item">
          <img src={gaming} alt="Gaming" className="main__article--item-img" />
          <p className="main__article--item-index">03</p>
          <h4 className="main__article--item-headline">The Growth of Gaming</h4>
          <p className="main__article--item-text">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </>
  );
}
