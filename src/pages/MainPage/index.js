import { useEffect, useRef } from "react";

import styles from './MainPage.module.scss'
import Header from "../../Components/Header";
import Intro from "../../Components/Intro";
import About from '../../Components/About'
import Skill from "../../Components/Skill";
import Portfolio from "../../Components/Portfolio";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";

function MainPage() {
    const htmlRef = useRef()

    // Get theme status
    useEffect(() => {
        const isDarkMode = JSON.parse(localStorage.getItem('isDarkMode'))

        if (isDarkMode) {
            htmlRef.current.classList.add('dark-mode')
        } 
    }, [])

    return (
        <div className={styles.container} ref={htmlRef}>
            <Header htmlRef={htmlRef}/>
            <div className={styles.wrapper}>
                <section><Intro /></section>
                <section><About /></section>
                <section><Skill /></section>
                <section><Portfolio /></section>
                <section><Contact /></section>
                <section><Footer /></section>
            </div>
        </div>
    )
}

export default MainPage
