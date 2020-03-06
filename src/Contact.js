import React from 'react';
import { Formik, Form, Field } from 'formik';

const Contact = () => {
    return (
        <>
        <div className='contact'>
            <h2>Contact Me</h2>
            <p>Do you have any questions? Please do not hesitate to contact me directly. I will get back to you within
            a matter of hours to help you.</p>
        </div>
        <Formik
            inatialValues={{ subject: '', message:""}}
            onSubmit={(values, e) => {
                e.preventDefault();
                console.log(values);
            }
        }>
            <Form>
                <Field name='subject' placeholder='Enter your subject'/>
                <Field name='message' placeholder='Enter your message'/>
                <button type='submit'>Submit</button>
            </Form>
        </Formik>
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