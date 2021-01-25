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
      "Front End: HTML, CSS, JavaScript, React, Redux",
      <br></br>,
      "Back End: Node.js, SQL, Python",
      <br></br>,
      "Data Structures, Algorithms, Architecture",
      <br></br>,
      "Git/GitHub",
    ],
  },
  {
    id: 2,
    name: "Simon Game",
    image: simon_game,
    url: "https://devaneyj3.github.io/simon_game/",
    description: [
      "Graduated with a 3.55 Cumulative GPA",
      <br></br>,
      "Awarded Academic Honors",
    ],
  },
  {
    id: 3,
    name: "To Do List",
    image: todo,
    url: "https://quizzical-joliot-698fe7.netlify.app/",
    description: [
      "Graduated with a 3.55 Cumulative GPA",
      <br></br>,
      "Awarded Academic Honors",
    ],
  },
  {
    id: 4,
    name: "Game of Life",
    image: Game_of_life,
    url: "https://game-of-lif-jordan.netlify.app/",
    description: [
      "Graduated with a 3.55 Cumulative GPA",
      <br></br>,
      "Awarded Academic Honors",
    ],
  },
  {
    id: 5,
    name: "Shopping Cart",
    image: shopping_cart,
    url: "https://react-shopping-cart.devaneyj3.now.sh/cart",
    description: [
      "Graduated with a 3.55 Cumulative GPA",
      <br></br>,
      "Awarded Academic Honors",
    ],
  },
];

export default data;
