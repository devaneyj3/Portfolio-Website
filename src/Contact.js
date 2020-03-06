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
                <button type='button'>Submit</button>
            </Form>


        </Formik>
    </>
    )
}

export default Contact;