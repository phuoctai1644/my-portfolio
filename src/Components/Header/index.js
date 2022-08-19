import { useEffect, useRef } from "react"
import { Container, Row, Col } from 'react-bootstrap'
import { CloseIcon, LogoIcon, MenuIcon } from "../../Icon"
import styles from './Header.module.scss'

function Header() {
    const homeRef = useRef()
    const aboutRef = useRef()
    const skillRef = useRef()
    const portfolioRef = useRef()
    const contactRef = useRef()

    const inputCheckRef = useRef()

    const resetStyle = () => {
        homeRef.current.style.color = 'black'
        aboutRef.current.style.color = 'black'
        skillRef.current.style.color = 'black'
        portfolioRef.current.style.color = 'black'
        contactRef.current.style.color = 'black'
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
                    <Col lg={3} md={2} sm={12} xs={2}>
                        <div className={styles.navMobileWrap}>
                            <a href="/" onClick={navToHome} className={styles.logo}>
                                <LogoIcon />
                                <h1>PhTai</h1>
                            </a>
                            <label htmlFor="nav-mobile-input" className={styles.openMenuIcon}>
                                <MenuIcon width="36" height="36" className={styles.mobileNavigate} />
                            </label>
                        </div>
                    </Col>

                    <Col lg={9} md={10} sm={0} xs={2}>
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
                </Row>  
            </Container>
        </div>
    )
}

export default Header