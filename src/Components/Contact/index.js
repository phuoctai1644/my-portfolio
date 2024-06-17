import { useRef, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { ContactIcon, LinkedInIcon, LocationIcon, MessageIcon } from '../../Icon'
import styles from './Contact.module.scss'

import { Modal } from 'bootstrap';
import emailjs from '@emailjs/browser';

function Contact() {
    const formRef = useRef()
    const [isSendingForm, setIsSendingForm] = useState(false);

    const handleSubmitContact = (e) => {
        e.preventDefault();
        setIsSendingForm(true);

        setTimeout(() => {
            emailjs.sendForm(
                process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
                process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
                formRef.current,
                {
                    publicKey: process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY,
                }
            )
                .then(() => {
                    const successModal = new Modal(document.querySelector("#success-modal"))
                    successModal.show();
                    /** Reset contact form */
                    formRef.current.reset();
                    setIsSendingForm(false);
                })
                .catch((error) => {
                    console.log('FAILED...', error.text);
                    setIsSendingForm(false);
                })
        }, 2000);
    }

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
                                    <span className='mt-2'>Address: Thu Duc, HCM, Vietnam</span>
                                </li>
                                <li>
                                    <ContactIcon />
                                    <span className='mt-2'>
                                        Phone:&nbsp;
                                        <a href="tel:+84388284790">+84 388 284 790</a>
                                    </span>
                                </li>
                                <li>
                                    <MessageIcon />
                                    <span className='mt-2'>
                                        Email:&nbsp;
                                        <a href="mailto:tranptai@gmail.com" target='blank'>tranptai@gmail.com</a>
                                    </span>
                                </li>
                                <li>
                                    <LinkedInIcon width='24' height='24' color="#1363ff"/>
                                    <span className='mt-2'>
                                        LinkedIn:&nbsp;
                                        <a href="https://www.linkedin.com/in/phuoc-tai/" target='blank'>linkedin.com/in/phuoc-tai/</a>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className="mt-4 mt-sm-0">
                            <h3>Contact Form</h3>
                            <form 
                                ref={formRef}
                                className={styles.contactFormControl}
                                onSubmit={handleSubmitContact}
                            >
                                <input type="text" className="form-control" name="fromName" placeholder="Name" required />
                                <input type="email" className="form-control" name="fromEmail" placeholder="Email " required/>
                                <input type="text" className="form-control" name="subject" placeholder="Subject (Optional) " />
                                <textarea name="message" cols="30" rows="5" placeholder="Message" required></textarea>

                                <Button type='submit' disabled={isSendingForm}>
                                    SEND
                                    {isSendingForm && (
                                        <div className="spinner-border ms-2" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>

            <SendSuccessTemplate></SendSuccessTemplate>
        </div>
    )
}

const SendSuccessTemplate = () => {
    return (
        <div className="modal fade" tabIndex="-1" id="success-modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title fs-16">Submitted form successfully!</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body fs-14">
                        <p>Thank you for your contact. I will respond as quickly as possible 🍀</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
