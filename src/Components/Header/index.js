import { Link } from "react-router-dom"
import { LogoIcon } from "../../Icon"
import styles from './Header.module.scss'

function Header() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                <LogoIcon />
                <h1>PhTai</h1>
            </div>
            <div className={styles.navigate}>
                <a href="/">Home</a>
                <a href="#about">About</a>
                <a href="#skill">Skill</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    )
}

export default Header