import "./styles/App.css";
import Heading from "./components/Heading";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Heading />
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;
