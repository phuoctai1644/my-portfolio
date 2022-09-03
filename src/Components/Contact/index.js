import { Container, Row, Col } from 'react-bootstrap'
import { ContactIcon, HomeIcon, LocationIcon, MessageIcon } from '../../Icon'
import styles from './Contact.module.scss'

function Contact() {
    return (
        <div className={styles.contact} id="contact">
            <h2 className={styles.sectionTitle}>CONTACT</h2>
            <Container fluid="lg">
                <Row>
                    <Col lg={6} md={6} sm={12}>
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
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className={styles.contactForm}>
                            <h3>Contact Form</h3>
                            <form 
                                method="POST"
                                action="https://formsubmit.co/tranptai@gmail.com"
                                className={styles.contactFormControl}
                            >
                                <input type="text" name="name" placeholder="Name:" required/>
                                <input type="email" name='email' placeholder="Email: " required/>
                                <input type="text" name="subject" placeholder="Subject (Optional): " />
                                <textarea name="message" cols="30" rows="10" placeholder="Message" required></textarea>

                                <input type="hidden" name="_next" value="http://localhost:3000/thankU" />

                                <button type="submit">SEND</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact