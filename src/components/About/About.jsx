import React from 'react';
import Nav from '../Nav/Nav';
import './About.scss'

const About = () => {
    return (
        <section className='About'>
            <Nav />
          <div className='about-header'>
            <h1>I love building innovative and creative Full Stack Applications</h1>
          </div>
          <section className="about-body">
              <h1>About</h1>
              <p>Hi, I'm Jordan Devaney. I am a Full Stack Web Developer.</p>
              <p>I started beginning my coding journey in 2017. Since then I have done numerous projects that are highlighted below. </p>
              <p>I graduated Lambda School in January 2021 with a focus on Full Stack Web Development and Computer Science.</p>
              <p>I have done <a href='/projects'>many team projects at Lambda School and various solo projects.</a>. I enjoy learning how to solidify my skills in Web Development from fellow teammates.</p>
              <p>You can learn more about my experience and credentials at my <a href='/resume'>resume page.</a></p>
          </section>
        </section>
    )
}

export default About;