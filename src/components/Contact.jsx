import React, {useState} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
        <div className='contact'>
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
            <button type='submit'>Submit</button>
        </form>
        <div class="col-md-3 text-center">
                <ul class="list-unstyled mb-0">
                    <li><i class="fas fa-map-marker-alt fa-2x"></i>
                        <p>Whitmore Lake, MI 48189, USA</p>
                    </li>
    
                    <li><i class="fas fa-phone mt-4 fa-2x"></i>
                        <p>810-220-9256</p>
                    </li>
    
                    <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                        <p>jordandevaney28@gmail.com</p>
                    </li>
                </ul>
            </div>
    </>
    )
}

export default Contact;