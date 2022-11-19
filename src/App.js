import "./styles/App.css";
import Heading from "./components/Heading";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div className="container">
        <Heading clicked={clicked} setClicked={setClicked} />
        <Main />
      </div>

      <Footer />
    </>
  );
}

export default App;
