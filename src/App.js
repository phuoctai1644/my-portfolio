import Header from "./Components/Header";
import Intro from "./Components/Intro";
import About from './Components/About'
import Skill from "./Components/Skill";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <section><Intro /></section>
        <section><About /></section>
        <section><Skill /></section>
        <section><Portfolio /></section>
        <section><Contact /></section>
        <section><Footer /></section>
      </div>
    </div>
  );
}

export default App;
