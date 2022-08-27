import { useEffect, useRef, useState } from "react"
import { Container, Row, Col } from 'react-bootstrap'
import { CloseIcon, LogoIcon, MenuIcon, MoonIcon, SunIcon } from "../../Icon"
import styles from './Header.module.scss'

function Header({htmlRef}) {
    const [darkMode, setDarkMode] = useState(() => JSON.parse(localStorage.getItem('isDarkMode')))

    useEffect(() => {
        if (darkMode) {
            // Toggle on PC
            ballThemePCRef.current.style.right = '2px'
            ballThemePCRef.current.style.left = null

            // // Toggle on mobile
            ballThemeMbRef.current.style.right = '2px'
            ballThemeMbRef.current.style.left = null
        } else {
            // Toggle on PC
            ballThemePCRef.current.style.right = null
            ballThemePCRef.current.style.left = '2px'

            // Toggle on mobile
            ballThemeMbRef.current.style.right = null
            ballThemeMbRef.current.style.left = '2px'
        }
    }, [darkMode])

    const homeRef = useRef()
    const aboutRef = useRef()
    const skillRef = useRef()
    const portfolioRef = useRef()
    const contactRef = useRef()

    const inputCheckRef = useRef()

    const ballThemeMbRef = useRef()
    const ballThemePCRef = useRef()

    const handleToggleTheme = () => {
        htmlRef.current.classList.toggle('dark-mode')
        localStorage.setItem("isDarkMode", !darkMode)
        setDarkMode(!darkMode)
    }

    const resetStyle = () => {
        homeRef.current.style.color = "var(--text-color)"
        aboutRef.current.style.color = "var(--text-color)"
        skillRef.current.style.color = "var(--text-color)"
        portfolioRef.current.style.color = "var(--text-color)"
        contactRef.current.style.color = "var(--text-color)"
    }

    const hideMobileMenu = () => {
        inputCheckRef.current.checked = false
    }

    const navToHome = () => {
        resetStyle()
        homeRef.current.href = '#intro'
        homeRef.current.style.color = '#1363ff'
        hideMobileMenu()
    }

    const navToAbout = () => {
        resetStyle()
        aboutRef.current.href = '#about'
        aboutRef.current.style.color = '#1363ff'
        hideMobileMenu()
    }

    const navToSkill = () => {
        resetStyle()
        skillRef.current.href = '#skill'
        skillRef.current.style.color = '#1363ff'
        hideMobileMenu()
    }

    const navToPortfolio = () => {
        resetStyle()
        portfolioRef.current.href = '#portfolio'
        portfolioRef.current.style.color = '#1363ff'
        hideMobileMenu()
    }

    const navToContact = () => {
        resetStyle()
        contactRef.current.href = '#contact'
        contactRef.current.style.color = '#1363ff'
        hideMobileMenu()
    }

    useEffect(() => {   
        homeRef.current.style.color = '#1363ff'
    }, [])

    return (
        <div className={styles.wrapper}>
            <Container fluid="lg">
                <Row className="align-items-center justify-content-between">
                    <Col lg={2} md={2} sm={12} xs={2}>
                        <div className={styles.navMobileWrap}>
                            <a href="/" onClick={navToHome} className={styles.logo}>
                                <LogoIcon />
                                <h1>PhTai</h1>
                            </a>
                            <div className={styles.mobileGroup}>
                                <div className={styles.toggleTheme}>
                                    <input 
                                        type="checkbox" 
                                        className={styles.checkbox}
                                        id="checkbox-mb" 
                                        value={darkMode}
                                        onChange={handleToggleTheme} 
                                    />
                                    <label htmlFor="checkbox-mb" className={styles.label}>
                                        <MoonIcon />
                                        <SunIcon />
                                        <div className={styles.ball} ref={ballThemeMbRef}></div>
                                    </label>
                                </div>
                                <label htmlFor="nav-mobile-input" className={styles.openMenuIcon}>
                                    <MenuIcon width="36" height="36" color={darkMode ? 'white' : 'black'} className={styles.mobileNavigate} />
                                </label>
                            </div>
                            
                        </div>
                    </Col>

                    <Col lg={8} md={8} sm={0} xs={2}>
                        <input ref={inputCheckRef} type="checkbox" hidden className={styles.navInput} id="nav-mobile-input" />

                        {/* Overlay */}
                        <label htmlFor="nav-mobile-input" className={styles.navOverlay}></label> 
                        
                        <ul className={styles.navList}>
                            <label htmlFor="nav-mobile-input" href="#" className={styles.navHeader}>
                                <CloseIcon width="36" height="36" />
                            </label>
                            <li className={styles.navItem}>
                                <a href="/" onClick={navToHome} ref={homeRef}>Home</a>
                            </li>
                            <li className={styles.navItem}>
                                <a href="/" onClick={navToAbout} ref={aboutRef}>About</a>
                            </li>
                            <li className={styles.navItem}>
                                <a href="/" onClick={navToSkill} ref={skillRef}>Skill</a>
                            </li>
                            <li className={styles.navItem}>
                                <a href="/" onClick={navToPortfolio} ref={portfolioRef}>Portfolio</a>
                            </li>
                            <li className={styles.navItem}>
                                <a href="/" onClick={navToContact} ref={contactRef}>Contact</a>
                            </li>
                        </ul>

                        
                    </Col>

                    <Col lg={2} md={2} sm={0}>
                        {/* Theme selection */}
                        <div className={styles.themeSelection}>
                            <input 
                                type="checkbox" 
                                className={styles.checkbox} 
                                id="checkbox" 
                                value={darkMode}
                                onChange={handleToggleTheme} 
                            />
                            <label htmlFor="checkbox" className={styles.label}>
                                <MoonIcon />
                                <SunIcon />
                                <div className={styles.ball} ref={ballThemePCRef}></div>
                            </label>
                        </div>
                    </Col>
                </Row>  
            </Container>
        </div>
    )
}

export default Header