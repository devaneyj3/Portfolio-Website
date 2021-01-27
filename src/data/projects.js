import React from "react";

import fitness from "../images/fitness.jpg";
import simon_game from "../images/simon-game.png";
import Game_of_life from "../images/Game_of_Life.png";
import todo from "../images/todo.jpg";
import shopping_cart from "../images/Shopping-Cart.png";

let projects = [
  {
    id: 1,
    name: "Anywhere Fitness",
    image: fitness,
    live_project: "https://inspiring-jones-a91418.netlify.app/",
    url: "/anywherefitness",
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
    live_project: "https://devaneyj3.github.io/simon_game/",
    url: "/simongame",
    description: [
      "Use JQuery to dynamically add content to make the site interactive",
    ],
  },
  {
    id: 3,
    name: "To Do List",
    image: todo,
    live_project: "https://quizzical-joliot-698fe7.netlify.app/",
    url: "/list",
    description: [
      "Utilized Redux with React to make a todo app.",
      "Constructed API endpoints using Node and database schema using Knex",
    ],
  },
  {
    id: 4,
    name: "Game of Life",
    image: Game_of_life,
    url: "/gameoflife",
    live_project: "https://game-of-lif-jordan.netlify.app/",
    description: [
      "This project was a part of one of my build weeks at Lambda School. This was done using HTML Canvas, Vanilla JS and Bootstrap",
    ],
  },
  {
    id: 5,
    name: "Shopping Cart",
    image: shopping_cart,
    live_project: "https://react-shopping-cart.devaneyj3.now.sh/cart",
    url: "/shoppingcart",
    description: ["Used React and Context API to build a basic shopping cart"],
  },
];

export default projects;
