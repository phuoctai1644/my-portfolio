import { Container, Row, Col} from 'react-bootstrap'
import styles from './Intro.module.scss'
import banner from '../../assets/images/image1.svg'
import { FacebookInfoIcon, GitInfoIcon, GmailInfoIcon } from '../../Icon'

function Intro() {
    return (
        <div className={styles.intro} id="intro">
            <Container fluid="lg">
                <Row className="align-items-center justify-content-center">
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <div className={styles.introContent}>
                            <h3>THIS IS ME</h3>
                            <h2>Tran Phuoc Tai</h2>
                            <p>I love designing and building websites</p>
                            <ul className={styles.introContact}>
                                <li><a href="https://github.com/phuoctai1644" target="__blank"><GitInfoIcon width="30" height="30"/></a></li>
                                <li><a href="https://www.facebook.com/tph.tai" target="__blank"><FacebookInfoIcon width="30" height="30"/></a></li>
                                <li><a href="mailto:tranptai@gmail.com" target="__blank"><GmailInfoIcon width="30" height="30"/></a></li>
                            </ul>
                            <a href="#about">DISCOVER NOW</a>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <div className={styles.introBanner}>
                            <img src={banner} alt="Intro Tai" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro
