import { FacebookInfoIcon, GitInfoIcon, GmailInfoIcon, LinkedInIcon } from '../../Icon'
import styles from './Footer.module.scss'

function Footer() {
    return (
        <div className={styles.footer}>
            <ul className={styles.footerContact}>
                <li><a href="https://github.com/phuoctai1644" target="__blank"><GitInfoIcon width="30" height="30"/></a></li>
                <li><a href="https://www.facebook.com/tph.tai" target="__blank"><FacebookInfoIcon width="30" height="30"/></a></li>
                <li><a href="mailto:tranptai@gmail.com" target="__blank"><GmailInfoIcon width="30" height="30"/></a></li>
                <li><a href="https://www.linkedin.com/in/phuoc-tai" target="__blank"><LinkedInIcon width="30" height="30"/></a></li>
            </ul>
            <span>&copy;2022 Phuoc Tai. All rights reserved</span>
        </div>
    )
}

export default Footer