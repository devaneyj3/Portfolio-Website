import React from "react";

import fitness from "../images/fitness.jpg";
import simon_game from "../images/simon-game.png";
import Game_of_life from "../images/Game_of_Life.png";
import todo from "../images/todo.jpg";
import shopping_cart from "../images/Shopping-Cart.png";

let data = [
  {
    id: 1,
    name: "Anywhere Fitness",
    image: fitness,
    url: "https://inspiring-jones-a91418.netlify.app/",
    description: [
      "An app designed where users can search and reserve fitness classes",
      "Constructed API endpoints and database schema using Knex",
      "Collaborated with a team of web developers to divde tasks",
    ],
  },
  {
    id: 2,
    name: "Simon Game",
    image: simon_game,
    url: "https://devaneyj3.github.io/simon_game/",
    description: [
      "Use JQuery to dynamically add content to make the site interactive",
    ],
  },
  {
    id: 3,
    name: "To Do List",
    image: todo,
    url: "https://quizzical-joliot-698fe7.netlify.app/",
    description: [
      "Utilized Redux with React to make a todo app.",
      "Constructed API endpoints using Node and database schema using Knex",
    ],
  },
  {
    id: 4,
    name: "Game of Life",
    image: Game_of_life,
    url: "https://game-of-lif-jordan.netlify.app/",
    description: [
      "This project was a part of one of my build weeks at Lambda School. This was done using HTML Canvas, Vanilla JS and Bootstrap",
    ],
  },
  {
    id: 5,
    name: "Shopping Cart",
    image: shopping_cart,
    url: "https://react-shopping-cart.devaneyj3.now.sh/cart",
    description: ["Used React and Context API to build a basic shopping cart"],
  },
];

export default data;
