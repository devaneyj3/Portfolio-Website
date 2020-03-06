import React from 'react';

const Projects = () => {
    return (
        <section>
            <header>
                <h2>Projects</h2>
                <p>I have done many projects in my time and others as part of Lambda School.</p>
            </header>
            <div className='projects'>
                <a href="https://devaneyj3.github.io/responsive-web-design-I/">
                    <img src="images/great-idea.png" alt="Responsive Web Design"></img></a>
                <h3><a href="https://devaneyj3.github.io/responsive-web-design-I/">Responsive Web Design</a></h3>
                <p>This was a Lambda School project about making the website look
                    user-friendly accross desktop, tablet, and mobile.
                </p>
                <a href="https://devaneyj3.github.io/simon_game/" class="image featured"><img src="images/simon-game.png" alt="Simon Game" /></a>
                <h3><a href="https://devaneyj3.github.io/simon_game/">Simon Game</a></h3>
                <p>Use JQuery to dynamically add content to make the site
                    interactive
                </p>
                <a href="https://devaneyj3.github.io/Drum_Kit/" class="image featured"><img src="images/Drum Kit.png" alt="Drum Kit" /></a>
                <h3><a href="https://devaneyj3.github.io/Drum_Kit/">Drum Kit</a></h3>
                <p>Used click handlers with JQeury to add interactivity to 
                    site. When you click a button it plays a drum sound.</p>

                <a href="https://heraldsdairydelight.wixsite.com/website" class="image featured"><img src="images/heralds.png" alt="Herald's Dairy Delight" /></a>
                <h3><a href="https://heraldsdairydelight.wixsite.com/website">Herald's Dairy Delight</a></h3>
                <p>Made a client website using the Wix website builder.</p>

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