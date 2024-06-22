import { createContext, useEffect, useRef, useState } from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";

import Header from "./Components/Header";
import Intro from "./Components/Intro";
import About from './Components/About';
import Experience from "./Components/Experience";
import Skill from "./Components/Skill";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import './App.css'
import { getExperiences, getProjects } from "./helpers/getFirestoreData";

export const AppContext = createContext({
  projects: null,
  experiences: null,
});

function App() {
  const htmlRef = useRef()
  const [projects, setProjects] = useState(null);
  const [experiences, setExperiences] = useState(null);
  const contextValue = { projects, experiences };

  /** Get Projects from Firebase */
  useEffect(() => {
    if (!projects) {
      getProjects(setProjects);
      return;
    }
  }, []);

  /** Get Experiences from Firebase */
  useEffect(() => {
    if (!experiences) {
      getExperiences(setExperiences);
      return;
    }
  }, []);

  // Get theme status
  useEffect(() => {
    const isDarkMode = JSON.parse(localStorage.getItem('isDarkMode'))

    if (isDarkMode) {
      htmlRef.current.classList.add('dark-mode')
    } 
  }, [])

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <AppContext.Provider value={contextValue}>
        <div className="wrapper" ref={htmlRef}>
            <Header htmlRef={htmlRef}/>
            <div className="content">
                <section><Intro /></section>
                <section><About /></section>
                <section><Skill /></section>
                <section><Experience /></section>
                <section><Portfolio /></section>
                <section><Contact /></section>
                <section><Footer /></section>
            </div>
        </div>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
