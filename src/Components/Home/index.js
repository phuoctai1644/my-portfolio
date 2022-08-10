import Header from "../Header"
import styles from './Home.module.scss'
import banner from '../../assets/images/image1.png'
import aboutImg from '../../assets/images/About - image.png'
import {HTMLIcon, CSSIcon, JSIcon, ReactJSIcon, GitIcon, CppIcon, LocationIcon, ContactIcon, MessageIcon, HomeIcon} from '../../Icon'

const EDU = [
    {
        start: 2019,
        end: 'Present',
        name: 'Bachelor of Computer Science',
        uni: 'Ho Chi Minh University of Technology (HCMUT)'
    },
]

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

function Home() {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.intro} id="intro">
                <div className={styles.introContent}>
                    <h3>THIS IS ME</h3>
                    <h2>PHUOC TAI</h2>
                    <p>Try my best with 200% effort</p>
                    <a href="#about">DISCOVER NOW</a>
                </div>
                <div className={styles.introBanner}>
                    <img src={banner} alt="Intro Tai" />
                </div>
            </div>

            <div className={styles.about} id="about">
                <div className={styles.aboutImg}>
                    <img src={aboutImg} alt="About Tai" />
                </div>

                <div className={styles.aboutContent}>
                    <h4>ABOUT ME</h4>
                    <div className={styles.getMore}>
                        <h3 className={styles.aboutChildTitle}>Get to know me!</h3>
                        <p>I'm Phuoc Tai, I have a passion for building and developing websites, starting with learning the basics of HTML, CSS, JS. And so far, I have been pursuing a framework, which is ReactJS, with personal and group projects that have been and are being done such as todolist, e-learning,... With persistence, I always want to create a product. the most complete product possible. Going forward, ReactJS will still be my biggest development goal.</p>
                    </div>
                    <ul className={styles.aboutEdu}>
                        <h3 className={styles.aboutChildTitle}>Education</h3>
                        {EDU.map(edu => (
                            <li key={edu.name}>
                                <p className={styles.eduTime}>{edu.start} - {edu.end}</p>
                                <p className={styles.eduInfo}>{edu.name} - {edu.uni}</p>
                            </li>      
                        ))}
                    </ul>
                </div>
            </div>

            <div className={styles.skill} id="skill">
                <h2 className={styles.sectionTitle}>SKILLS</h2>
                <ul className={styles.skillList}>
                    <li><HTMLIcon width="75" height="75"/></li>
                    <li><CSSIcon width="75" height="75"/></li>
                    <li><JSIcon width="75" height="75"/></li>
                    <li><ReactJSIcon width="75" height="75"/></li>
                    <li><GitIcon width="75" height="75"/></li>
                    <li><CppIcon width="75" height="75"/></li>
                </ul>
            </div>

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

            <div className={styles.contact} id="contact">
                <h2 className={styles.sectionTitle}>CONTACT</h2>
                <div className={styles.contactWrap}>
                    <div className={styles.contactInfo}>
                        <h3>Contact Info</h3>
                        <ul className={styles.contactList}>
                            <li>
                                <LocationIcon />
                                <span>Address: Thu Duc, HCM, Vietnam</span>
                            </li>
                            <li>
                                <ContactIcon />
                                <span>Phone: +84 388 284 790</span>
                            </li>
                            <li>
                                <MessageIcon />
                                <span>Email: tranptai@gmail.com</span>
                            </li>
                            <li>
                                <HomeIcon />
                                <span>Website: phuoctai.github.com</span>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.contactForm}>
                        <h3>Contact Form</h3>
                        <form action="" className={styles.contactFormControl}>
                            <input type="text" placeholder="Name:" required/>
                            <input type="email" placeholder="Email: " required/>
                            <input type="text" placeholder="Subject (Optional): " />
                            <textarea name="" id="" cols="30" rows="10" placeholder="Message" required></textarea>

                            <button type="submit">SEND</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className={styles.footer}>
                <span>&copy;2022 Phuoc Tai. All rights reserved</span>
            </div>
        </div>
    )
}

export default Home
