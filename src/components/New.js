export default function New(props) {
  return (
    <>
      <div ref={props.newRef} className="main__new">
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
          <h3 className="main__new--item-headline">Is VC Funding Drying Up?</h3>
          <p className="main__new--item-text">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </>
  );
}
