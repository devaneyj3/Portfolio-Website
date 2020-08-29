import React from "react";
import wonderlist from "../../images/wunderlist.png";
import simon_game from "../../images/simon-game.png";
import Game_of_life from "../../images/Game_of_Life.png";
import todo from "../../images/todo.jpg";
import shopping_cart from "../../images/Shopping-Cart.png";


const game_of_life_url = 'https://game-of-lif-jordan.netlify.app/'
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
						href="https://wunderlist-2.firebaseapp.com/"
						className="image featured">
						<img src={wonderlist} alt="Wonderlist-App"></img>
					</a>
					<h3>
						<a href="https://wunderlist-2.firebaseapp.com/">Wunderlist App</a>
					</h3>
					<p>
						This was a Lambda School sprint project using React to make a todo
						list app.
					</p>
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
						href="https://reducer-todo3.netlify.com/"
						className="image featured">
						<img src={todo} alt="Todo" />
					</a>
					<h3>
						<a href="https://reducer-todo3.netlify.com/">To Do</a>
					</h3>
					<p>Use the use reducer hook in React to make a simple to do app</p>
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
