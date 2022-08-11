import Header from "./Components/Header";
import Intro from "./Components/Intro";
import About from './Components/About'
import Skill from "./Components/Skill";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Intro />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
