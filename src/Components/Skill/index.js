import { Container, Row, Col } from 'react-bootstrap'
import styles from './Skill.module.scss'
import {
    HTMLIcon, CSSIcon, JSIcon, ReactJSIcon, GitIcon, SASSIcon, BootstrapIcon, TSIcon,
    AngularIcon, PythonIcon, DjangoIcon
} from '../../Icon'

const SKILLS = [
    {
        title: "FRONTEND DEVELOPER",
        description: "Specializing in modern web development with React, Angular, and responsive design principles.",
        icon: "💻",
        techs: [<HTMLIcon key="html"/>, <CSSIcon key="css"/>, <JSIcon key="js"/>, <ReactJSIcon key="react"/>, <AngularIcon key="angular"/>, <TSIcon key="ts"/>]
    },
    {
        title: "UI/UX DESIGNER", 
        description: "Creating intuitive user interfaces and experiences with attention to detail and modern design trends.",
        icon: "🎨",
        techs: [<SASSIcon key="sass"/>, <BootstrapIcon key="bootstrap"/>, <GitIcon key="git"/>]
    }
]

function Skill() {
    return (
        <div className={styles.skill} id="skill">
            <Container fluid="lg">
                <h2 className={styles.sectionTitle}>SKILLS</h2>
                <Row className="justify-content-center">
                    {SKILLS.map((skill, index) => (
                        <Col lg={5} md={6} sm={12} key={index} className="mb-4">
                            <div className={styles.skillCard}>
                                <div className={styles.skillIcon}>{skill.icon}</div>
                                <h3 className={styles.skillTitle}>{skill.title}</h3>
                                <p className={styles.skillDescription}>{skill.description}</p>
                                <div className={styles.skillTechs}>
                                    {skill.techs.map((tech, i) => (
                                        <div key={i} className={styles.techIcon}>{tech}</div>
                                    ))}
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Skill
