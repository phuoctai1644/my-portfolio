import styles from './Intro.module.scss'
import banner from '../../assets/images/image1.png'

function Intro() {
    return (
        <div className={styles.intro} id="intro">
            <div className={styles.introContent}>
                <h3>THIS IS ME</h3>
                <h2>Tran Phuoc Tai</h2>
                <p>Try my best with 200% effort</p>
                <a href="#about">DISCOVER NOW</a>
            </div>
            <div className={styles.introBanner}>
                <img src={banner} alt="Intro Tai" />
            </div>
        </div>
    )
}

export default Intro
