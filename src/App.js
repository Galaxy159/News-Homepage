import "./styles/App.css";
import Heading from "./components/Heading";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState, useRef } from "react";

function App() {
  const [clicked, setClicked] = useState(false);
  const homeRef = useRef(null);
  const newRef = useRef(null);
  const popularRef = useRef(null);

  return (
    <>
      <div className="container">
        <Heading
          clicked={clicked}
          setClicked={setClicked}
          homeRef={homeRef}
          newRef={newRef}
          popularRef={popularRef}
        />
        <Main homeRef={homeRef} newRef={newRef} popularRef={popularRef} />
      </div>

      <Footer />
    </>
  );
}

export default App;
