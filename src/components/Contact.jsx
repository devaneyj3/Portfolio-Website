import React, {useState} from 'react';
import { Col, Row, Button, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {

    const [data, setData] = useState({
        subject: '',
        message: ''
    })

    const submitForm = e => {
        e.preventDefault();
    }

    const ChangeHandler = e => {
        setData({...data,[e.target.name]: e.target.value})
    }

    return (
        <>
        <div className='contact-page-header'>
            <h2>Contact Me</h2>
            <p>Do you have any questions? Please do not hesitate to contact me directly. I will get back to you within
            a matter of hours to help you.</p>
        </div>
        <form onSubmit={submitForm}>
            <Row form>
                <Col md={6}>
                    <Label for="subject">Subject</Label>
                    <Input name='subject' name='subject' onChange={ChangeHandler} value={data.subject}/>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="message">Message</Label>
                        <Input type="textarea" name="message" onChange={ChangeHandler} value={data.message} />
                    </FormGroup>
                </Col>
            </Row>
            <Button color="info">Send</Button>
        </form>
        <div class="col-md-3 text-center">
            <li><FontAwesomeIcon icon={faMapMarker}></FontAwesomeIcon>
                <p>Whitmore Lake, MI 48189, USA</p>
            </li>

            <li><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                <p>810-220-9256</p>
            </li>

            <li><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                <p>jordandevaney28@gmail.com</p>
            </li>
        </div>
    </>
    )
}

export default Contact;