import styles from './ThankUPage.module.scss'
import { Link } from 'react-router-dom'

function ThankUPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h1>Thank you !</h1>
                <p>Thanks for sendding me an email!</p>
                <p>I will reply soon 😍</p>
                <Link className={styles.goHome} to="/">Go Home</Link>
            </div>
        </div>
    )
}

export default ThankUPage
