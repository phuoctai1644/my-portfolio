import { Container, Row, Col} from 'react-bootstrap'
import styles from './About.module.scss'
import aboutImg from '../../assets/images/About - image.svg'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../App'
import { AngularIcon, BootstrapIcon, CSSIcon, DjangoIcon, HTMLIcon, JSIcon, PythonIcon, ReactJSIcon, SASSIcon, TSIcon } from '../../Icon'
import { ExperienceTime } from '../../helpers/experience'

const EDU = [
    {
        start: 'Aug, 2019',
        end: 'Apr, 2024',
        name: 'Bachelor of Computer Science',
        uni: 'Ho Chi Minh University of Technology (HCMUT)'
    },
]

function About() {
    const { experiences } = useContext(AppContext);
    const [YOE, setYOE] = useState('');

    useEffect(() => {
        if (experiences) {
            const expTime = new ExperienceTime(experiences[experiences.length - 1].startTime)
            setYOE(expTime.toString())
        }
    }, [experiences]);

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
                                <p>I'm Phuoc Tai, I'm a Frontend Engineer with <strong>{YOE} years </strong>
                                of experience building web applications. While my initial focus was on <strong>ReactJS</strong>, 
                                I've quickly adapted and excelled in using <strong>Angular</strong> in my current role.
                                This experience has fostered my ability to learn new frameworks and technologies efficiently.</p>
                            </div>
                            <ul className={styles.aboutEdu}>
                                <h4 className={styles.aboutChildTitle}>Education</h4>
                                {EDU.map(edu => (
                                    <li key={edu.name}>
                                        <p className='opacity-50'>{edu.start} - {edu.end}</p>
                                        <p className={styles.eduInfo}>{edu.name} - {edu.uni}</p>
                                    </li> 
                                ))}
                            </ul>
                            <h4 className={styles.aboutChildTitle}>Skills</h4>
                            <ul className={styles.aboutSkill}>
                                <li className={styles.skillType}>
                                    <div className={styles.skillTypeGroup}>
                                        <span className={styles.skillTitle}>Frontend: </span>
                                        <div className={styles.skillList}>
                                            <div className={styles.skillItem} title='HTML'><HTMLIcon /></div>
                                            <div className={styles.skillItem} title='CSS'><CSSIcon /></div>
                                            <div className={styles.skillItem} title='SASS'><SASSIcon /></div>
                                            <div className={styles.skillItem} title='Bootstrap'><BootstrapIcon /></div>
                                            <div className={styles.skillItem} title='JavaScript'><JSIcon /></div>
                                            <div className={styles.skillItem} title='TypeScript'><TSIcon /></div>
                                            <div className={styles.skillItem} title='ReactJS'><ReactJSIcon /></div>
                                            <div className={styles.skillItem} title='Angular'><AngularIcon /></div>
                                        </div>
                                    </div>
                                </li>
                                <li className={styles.skillType}>
                                    <div className={styles.skillTypeGroup}>
                                        <span className={styles.skillTitle}>Backend: </span>
                                        <div className={styles.skillList}>
                                            <div className={styles.skillItem} title='Python'><PythonIcon /></div>
                                            <div className={styles.skillItem} title='Django'><DjangoIcon /></div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About
