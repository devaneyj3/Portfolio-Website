import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const ContactMain = () => {
    return (
        <section class="contact">
            <div class="social-header">
                <h2>Contact Info</h2>
                <p>Contact me so I can help you make an awesome website!!!</p>
            </div>
        <ul class="social-links">
            <a href="https://www.facebook.com/jordan.devaney.798"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
            <a href="https://www.linkedin.com/in/jordandevaney/"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
            <a href="https://github.com/devaneyj3"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
        </ul>
        <p class="contactInfo"><a href='mailto:jordandevaney28@gmail.com'>jordandevaney28@gmail.com</a> | 810-220-9256</p>
        <footer>
            <p>&copy; 2019. Jordan Devaney. All rights reserved.</p>
        </footer>
        </section>
    )
}

export default ContactMain;