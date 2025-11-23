import { Container } from 'react-bootstrap'
import { FacebookInfoIcon, GitInfoIcon, GmailInfoIcon, LinkedInIcon } from '../../Icon'
import styles from './Footer.module.scss'

function Footer() {
    return (
        <div className={styles.footer}>
            <Container fluid="lg">
                <div className={styles.ctaContent}>
                    <h2 className={styles.ctaTitle}>LET'S COLLABORATE!</h2>
                    <p className={styles.ctaSubtitle}>Ready to build something amazing? Let's turn your ideas into reality.</p>
                    <div className={styles.contactInfo}>
                        <p className={styles.email}>tranptai@gmail.com</p>
                        <p className={styles.phone}>+84 xxx-xxx-xxx</p>
                    </div>
                    <ul className={styles.footerContact}>
                        <li><a href="https://github.com/phuoctai1644" target="_blank" rel="noopener noreferrer"><GitInfoIcon width="30" height="30"/></a></li>
                        <li><a href="https://www.facebook.com/tph.tai" target="_blank" rel="noopener noreferrer"><FacebookInfoIcon width="30" height="30"/></a></li>
                        <li><a href="mailto:tranptai@gmail.com" target="_blank" rel="noopener noreferrer"><GmailInfoIcon width="30" height="30"/></a></li>
                        <li><a href="https://www.linkedin.com/in/phuoc-tai" target="_blank" rel="noopener noreferrer"><LinkedInIcon width="30" height="30"/></a></li>
                    </ul>
                    <div className={styles.footerName}>
                        <span>PHUOC TAI</span>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer