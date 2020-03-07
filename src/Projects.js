import React from 'react';
import wonderlist from './images/wunderlist.png';
import simon_game from './images/simon-game.png';
import Drum_Kit from './images/Drum Kit.png';

const Projects = () => {
    return (
        <section>
            <header>
                <h2>Projects</h2>
                <p>I have done many projects in my time and others as part of Lambda School.</p>
            </header>
            <div className='projects'>
                    <img src={wonderlist} alt="Wonderlist-App"></img>                <h3><a href="https://wunderlist-2.firebaseapp.com/">Wunderlist App</a></h3>
                <p>This was a Lambda School sprint project about making a todo list
                    app.
                </p>
                <a href="https://devaneyj3.github.io/simon_game/" class="image featured"><img src={simon_game} alt="Simon Game" /></a>
                <h3><a href="https://devaneyj3.github.io/simon_game/">Simon Game</a></h3>
                <p>Use JQuery to dynamically add content to make the site
                    interactive
                </p>
                <a href="https://devaneyj3.github.io/Drum_Kit/" class="image featured"><img src={Drum_Kit} alt="Drum Kit" /></a>
                <h3><a href="https://devaneyj3.github.io/Drum_Kit/">Drum Kit</a></h3>
                <p>Used click handlers with JQeury to add interactivity to 
                    site. When you click a button it plays a drum sound.</p>

            <footer>
                <p>Whether you are a small buisness, potential employer, or sole proprietor, I can add 
                    value to your team or project. View my complete portfolio on <a href="https://github.com/devaneyj3">GitHub.</a>
                </p>
            </footer>

            </div>
        </section>
	
    )
}

export default Projects;