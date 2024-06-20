import { useEffect, useRef, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import styles from './Portfolio.module.scss'
import Image from '../Image'

/** Firestore */
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

function Portfolio() {
    const reverseRef = useRef([])
    const [portfolioes, setPortfolioes] = useState([]);
    
    useEffect(() => {
        for(let item of reverseRef.current) {
            if (reverseRef.current.indexOf(item) % 2 !== 0) {
                item.style.flexDirection = 'row-reverse'
            }
        }
    }, [])

    useEffect(() => {
        /** Get projects from firestore */
        getDocs(query(collection(db, 'projects')))
            .then((querySnapshot) => {
                const portfolioes = [];
                querySnapshot.forEach(doc => { 
                    const _document = doc.data();
                    const createdAt = _document.createdAt;
                    portfolioes.push({
                        ..._document,
                        createdAt: new Date(createdAt.seconds * 1000 + createdAt.nanoseconds / 1000000)
                    });
                });
                setPortfolioes(portfolioes.sort((a, b) => b.createdAt - a.createdAt));
            })
            .catch(error => {
                console.log("Error getting documents: ", error);
            })
    }, [])

    return (
        <div className={styles.portfolio} id="portfolio">
            <Container fluid="lg">
                <h2 className={styles.sectionTitle}>PORTFOLIO</h2>
                <ul className={styles.portfolioList}>
                    {portfolioes.map((item, index) => (
                        <li 
                            key={index} 
                            className={styles.portfolioItem} 
                        >
                            <Row className="align-items-center" ref={el => reverseRef.current[index] = el}>
                                <Col sm={12} md={8} lg={6}>
                                    <div className={styles.portfolioDemoWrap}>
                                        <Image url={item.demo} alt="Project Demo" width={item.title !== 'Todo App' ? '100%' : undefined}/>
                                    </div>
                                </Col>
                                <Col sm={0} md={4} lg={6}>
                                    <div className={styles.portfolioContent}>
                                        <h3 className={styles.portfolioName}>{item.title}</h3>
                                        <p className={styles.portfolioDesc}>{item.description}</p>
                                        <ul className={styles.portfolioTech}>
                                            {item?.skills?.frontend && (
                                                <li>Frontend: <strong>{item.skills.frontend.join(', ')}</strong></li>
                                            )}
                                            {item?.skills?.backend && (
                                                <li>Backend: <strong>{item.skills.backend.join(', ')}</strong></li>
                                            )}
                                            {item?.skills?.database && (
                                                <li>Database: <strong>{item.skills.database.join(', ')}</strong></li>
                                            )}
                                        </ul>
                                        <div className={styles.portfolioBtnGroup}>
                                            {item.demo && <Button size="lg" href={item.link} target="__blank">Demo</Button>}
                                            {item.source && <Button size="lg" href={item.source} target="__blank">Source</Button>}
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </li>
                    ))}
                </ul>
            
                <div className={styles.portfolioBtnGroup} attr-type='main'>
                    <Button className="my-5" size='lg' href="https://github.com/phuoctai1644" target="__blank">More Projects</Button>
                </div>
            </Container>
        </div>
    )
}

export default Portfolio
