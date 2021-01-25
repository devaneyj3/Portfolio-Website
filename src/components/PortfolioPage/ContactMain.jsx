import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Button } from 'reactstrap'

const ContactMain = () => {
    return (
        <section className="contact">
            <div className="social-header">
                <h2>Contact Info</h2>
                <p>Contact me so I can help you make an awesome website!!!</p>
                <Button outline color="info"><Link to='/contact'>Let's start a convesation</Link></Button>
                
            </div>
        <ul className="social-links">
            <a href="https://www.linkedin.com/in/jordandevaney/"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
            <a href="https://github.com/devaneyj3"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
        </ul>
        <p className="contactInfo"><a href='mailto:jordandevaney28@gmail.com'>jordandevaney28@gmail.com</a> | 810-220-9256</p>
        <footer>
            <p>&copy; 2019. Jordan Devaney. All rights reserved.</p>
        </footer>
        </section>
    )
}

export default ContactMain;