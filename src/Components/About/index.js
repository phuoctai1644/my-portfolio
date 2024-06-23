import { Container, Row, Col} from 'react-bootstrap'
import styles from './About.module.scss'
import aboutImg from '../../assets/images/About - image.svg'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../App'

const EDU = [
    {
        start: 2019,
        end: 2024,
        name: 'Bachelor of Computer Science',
        uni: 'Ho Chi Minh University of Technology (HCMUT)'
    },
]

function About() {
    const { experiences } = useContext(AppContext);
    const [YOE, setYOE] = useState('');

    useEffect(() => {
        if (experiences) {
            setYOE(getYOE())
        }
    }, [experiences]);

    const getYOE = () => {
        const startDate = new Date(experiences[experiences.length - 1].startTime);
        if (!startDate) {
            throw new Error("Invalid start date. Please provide a valid Date object.");
        }
    
        const currentDate = new Date();
        const timeDifference = currentDate.getTime() - startDate.getTime();
        const YOE = Number(timeDifference / (1000 * 60 * 60 * 24 * 365)).toFixed(2);

        return getYOEString(YOE);
    }

    const getYOEString = YOE => {
        const evenYOE = Math.floor(YOE);
        const oddYOE = YOE - evenYOE;

        if (oddYOE >= 0.25) {
            return `nearly ${evenYOE + 0.5}`;
        } else if (oddYOE >= 0.75) {
            return `nearly ${evenYOE + 1}`;
        }
        return evenYOE;
    }

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
