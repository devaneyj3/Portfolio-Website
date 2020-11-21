import React from "react";
import fitness from "../../images/fitness.jpg";
import simon_game from "../../images/simon-game.png";
import Game_of_life from "../../images/Game_of_Life.png";
import todo from "../../images/todo.jpg";
import shopping_cart from "../../images/Shopping-Cart.png";


const game_of_life_url = 'https://game-of-lif-jordan.netlify.app/'
const todo_url = 'https://quizzical-joliot-698fe7.netlify.app/'
const fitness_url = 'https://inspiring-jones-a91418.netlify.app/'
const Projects = () => {
	return (
		<section className="portfolio">
			<header>
				<h2>Projects</h2>
				<p>
					I have done many projects in my time and others as part of Lambda
					School.
				</p>
			</header>
			<div className="projects">
				<section className="row">
					<a
						href={fitness_url}
						className="image featured">
						<img src={fitness} alt="Anywhere Fitness"></img>
					</a>
					<h3>
						<a href={fitness_url}>Anywhere Fitness</a>
					</h3>
					<p>An app designed where users can search and reserve fitness classes</p>
					<p>Constructed API endpoints and database schema using Knex</p>
					<p>Collaborated with a team of web developers to divde tasks</p>
				</section>
				<section className="row">
					<a
						href="https://devaneyj3.github.io/simon_game/"
						className="image featured">
						<img src={simon_game} alt="Simon Game" />
					</a>
					<h3>
						<a href="https://devaneyj3.github.io/simon_game/">Simon Game</a>
					</h3>
					<p>
						Use JQuery to dynamically add content to make the site interactive
					</p>
				</section>
				<section className="row">
					<a
						href={todo_url}
						className="image featured">
						<img src={todo} alt="Todo" />
					</a>
					<h3>
						<a href={todo_url}>To Do</a>
					</h3>
					<p>Utilized Redux with React to make a todo app.</p>
					<p>Constructed API endpoints using Node and database schema using Knex</p>
				</section>
				<section className="row">
					<a
						href={game_of_life_url}
						className="image featured">
						<img src={Game_of_life} alt="Game of Life"/>
					</a>
					<h3>
						<a href={game_of_life_url}>Game of Life</a>
					</h3>
					<p>
						This project was a part of one of my build weeks at Lambda School. This was done using HTML Canvas, Vanilla JS and Bootstrap
					</p>
				</section>
				<section className="row">
					<a
						href="https://react-shopping-cart.devaneyj3.now.sh/cart"
						className="image featured">
						<img src={shopping_cart} alt="Shopping Cart" />
					</a>
					<h3>
						<a href="https://react-shopping-cart.devaneyj3.now.sh/cart">
							Shopping Cart
						</a>
					</h3>
					<p>Used React and Context API to build a basic shopping cart</p>
				</section>
				<footer>
					<p>
						Whether you are a small buisness, potential employer, or sole
						proprietor, I can add value to your team or project. View my
						complete portfolio on
						<a href="https://github.com/devaneyj3"> GitHub.</a>
					</p>
				</footer>
			</div>
		</section>
	);
};

export default Projects;
