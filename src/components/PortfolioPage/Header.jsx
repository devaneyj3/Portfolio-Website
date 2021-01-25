import React from 'react';
import me from '../../images/me.jpg';

const Header = () => {
    return (
        <section className='home'>
                <div className='header'>
                    <h1>Full Stack Web Developer</h1>
                    <p>I love coding projects that have giant influence.</p>
            <img src={me} alt='me'></img>
                </div>
        </section>
    )
}

export default Header;