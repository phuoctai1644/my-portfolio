import styles from './Portfolio.module.scss'

const PORTFOLIO = [
    {
        gif: '',
        name: 'todoapp',
        desc: 'A to-do-list app',
        tech: ['React', 'HTML']
    },
    {
        gif: '',
        name: 'E-learning',
        desc: 'a website supports teaching and learning process with attractive and practical interface',
        tech: ['React', 'HTML']
    },
    {
        gif: '',
        name: 'SetSail - Travel Agency Theme',
        desc: 'Using basic knowledge of HTML, CSS, JS to rebuild the website: https://setsail.qodeinteractive.com/',
        tech: ['HTML', 'CSS', 'Javascript']
    }
]

function Portfolio() {
    return (
        <div className={styles.portfolio} id="portfolio">
            <h2 className={styles.sectionTitle}>PORTFOLIO</h2>
            <ul className={styles.portfolioList}>
                {PORTFOLIO.map(item => (
                    <li key={item.name}>
                        <img src={item.gif} alt="proj demo" />
                        <div className={styles.portfolioContent}>
                            <h3 className={styles.portfolioName}>{item.name}</h3>
                            <p className={styles.portfolioDesc}>{item.desc}</p>
                            <ul className={styles.portfolioTech}>
                                {item.tech.map(tech => (
                                    <li key={tech}>{tech}</li>
                                ))}
                            </ul>
                            <div className={styles.portfolioBtn}>
                                <button>Demo</button>
                                <button>Source</button>
                            </div>
                        </div>
                    </li>

                ))}
            </ul>
            <div className={styles.portfolioBtn}>
                <button>More projects</button>
            </div>
        </div>
    )
}

export default Portfolio
