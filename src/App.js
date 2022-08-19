import ThemeProvider from "react-bootstrap/ThemeProvider";

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
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <div className="app">
        <Header />
        <div className="wrapper">
          <section><Intro /></section>
          <section><About /></section>
          <section><Skill /></section>
          <section><Portfolio /></section>
          <section><Contact /></section>
          <section><Footer /></section>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;