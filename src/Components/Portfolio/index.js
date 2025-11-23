import { useContext } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import styles from './Portfolio.module.scss'
import Image from '../Image'

import { AppContext } from '../../App';

function Portfolio() {
    const portfolioes = useContext(AppContext).projects;

    return (
        <div className={styles.portfolio} id="portfolio">
            <Container fluid="lg">
                <h2 className={styles.sectionTitle}>PORTFOLIO</h2>
                <Row>
                    {portfolioes?.map((project, index) => (
                        <Col lg={6} md={6} sm={12} key={index} className="mb-4">
                            <div className={styles.projectCard}>
                                <div className={styles.projectDecoration}>
                                    <div className={styles.projectDots}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                                <div className={styles.projectImage}>
                                    {project.demo && <Image url={project.demo} alt={project.title} />}
                                </div>
                                <div className={styles.projectContent}>
                                    <div className={styles.projectHeader}>
                                        <h3 className={styles.projectId}>PROJECT {(index + 1).toString().padStart(2, '0')}</h3>
                                        <span className={styles.projectYear}>2024</span>
                                    </div>
                                    <h4 className={styles.projectTitle}>{project.title}</h4>
                                    <p className={styles.projectDescription}>{project.description}</p>
                                    <ul className={styles.projectTech}>
                                        {project?.skills?.frontend && (
                                            <li>Frontend: <strong>{project.skills.frontend.join(', ')}</strong></li>
                                        )}
                                        {project?.skills?.backend && (
                                            <li>Backend: <strong>{project.skills.backend.join(', ')}</strong></li>
                                        )}
                                        {project?.skills?.database && (
                                            <li>Database: <strong>{project.skills.database.join(', ')}</strong></li>
                                        )}
                                    </ul>
                                    <div className={styles.projectBtnGroup}>
                                        {project.link && <Button className={styles.projectBtn} size="lg" href={project.link} target="_blank">Demo</Button>}
                                        {project.source && <Button className={styles.projectBtn} size="lg" href={project.source} target="_blank">Source</Button>}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            
                <div className={styles.portfolioBtnGroup}>
                    <Button className={styles.btn} size='lg' href="https://github.com/phuoctai1644" target="_blank">More Projects</Button>
                </div>
            </Container>
        </div>
    )
}

export default Portfolio
