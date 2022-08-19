import { Container, Row, Col} from 'react-bootstrap'
import styles from './About.module.scss'
import aboutImg from '../../assets/images/About - image.svg'

const EDU = [
    {
        start: 2019,
        end: 'Present',
        name: 'Bachelor of Computer Science',
        uni: 'Ho Chi Minh University of Technology (HCMUT)'
    },
]

function About() {
    return (
        <div className={styles.about} id="about">
            <Container fluid="lg">
                <Row className='align-items-center'>
                    <Col lg={6} md={6} sm={0} xs={0}>
                        <div className={styles.aboutImg}>
                            <img src={aboutImg} alt="About Tai" />
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <div className={styles.aboutContent}>
                            <h3>ABOUT ME</h3>
                            <div className={styles.getMore}>
                                <h4 className={styles.aboutChildTitle}>Get to know me!</h4>
                                <p>I'm Phuoc Tai, I have a passion for building and developing websites, starting with learning the basics of HTML, CSS, JS. And so far, I have been pursuing a framework, which is ReactJS, with personal and group projects that have been and are being done such as todolist, e-learning,... With persistence, I always want to create a product. the most complete product possible. Going forward, ReactJS will still be my biggest development goal.</p>
                            </div>
                            <ul className={styles.aboutEdu}>
                                <h4 className={styles.aboutChildTitle}>Education</h4>
                                {EDU.map(edu => (
                                    <li key={edu.name}>
                                        <p className={styles.eduTime}>{edu.start} - {edu.end}</p>
                                        <p className={styles.eduInfo}>{edu.name} - {edu.uni}</p>
                                    </li>      
                                ))}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About
