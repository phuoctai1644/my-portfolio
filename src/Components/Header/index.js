import { useEffect, useRef } from "react"
import { LogoIcon } from "../../Icon"
import styles from './Header.module.scss'

function Header() {
    const homeRef = useRef()
    const aboutRef = useRef()
    const skillRef = useRef()
    const portfolioRef = useRef()
    const contactRef = useRef()

    const resetStyle = () => {
        homeRef.current.style.color = 'black'
        aboutRef.current.style.color = 'black'
        skillRef.current.style.color = 'black'
        portfolioRef.current.style.color = 'black'
        contactRef.current.style.color = 'black'
    }

    const navToHome = () => {
        resetStyle()
        homeRef.current.href = '#intro'
        homeRef.current.style.color = '#1363ff'
    }

    const navToAbout = () => {
        resetStyle()
        aboutRef.current.href = '#about'
        aboutRef.current.style.color = '#1363ff'
    }

    const navToSkill = () => {
        resetStyle()
        skillRef.current.href = '#skill'
        skillRef.current.style.color = '#1363ff'
    }

    const navToPortfolio = () => {
        resetStyle()
        portfolioRef.current.href = '#portfolio'
        portfolioRef.current.style.color = '#1363ff'
    }

    const navToContact = () => {
        resetStyle()
        contactRef.current.href = '#contact'
        contactRef.current.style.color = '#1363ff'
    }

    useEffect(() => {
        homeRef.current.style.color = '#1363ff'
    }, [])

    return (
        <div className={styles.wrapper}>
            <a href="/" onClick={navToHome} className={styles.logo}>
                <LogoIcon />
                <h1>PhTai</h1>
            </a>
            <div className={styles.navigate}>
                <a href="/" onClick={navToHome} ref={homeRef}>Home</a>
                <a href="/" onClick={navToAbout} ref={aboutRef}>About</a>
                <a href="/" onClick={navToSkill} ref={skillRef}>Skill</a>
                <a href="/" onClick={navToPortfolio} ref={portfolioRef}>Portfolio</a>
                <a href="/" onClick={navToContact} ref={contactRef}>Contact</a>
            </div>
        </div>
    )
}

export default Header