import React from 'react';
import me from '../../images/me.jpg';

const Description = () => {
    return (
        <section className='home'>
            <img src={me} alt='me'></img>
                <div className='header'>
                    <h1>Hi. I'm <strong>Jordan Devaney</strong>.</h1>
                    <p>Full Stack Web Developer</p>
                </div>
        </section>
    )
}

export default Description;