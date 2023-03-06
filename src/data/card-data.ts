import Burger from "../assets/burger.jpeg";
import Pasta from "../assets/pasta.jpeg";
import Pizza from "../assets/pizza.jpeg";
import Sandwich from "../assets/sandwich.jpeg";
import { Card } from "../classes";

export const cardData: Card[] = [
  {
    id: 1,
    title: "Stacked Delights",
    description: "Through 02/23",
    image: Sandwich,
  },
  {
    id: 2,
    title: "Slice of Heaven",
    description: "Fresh cut pizza",
    image: Pizza,
  },
  {
    id: 3,
    title: "Pasta Paradise",
    description: "The best sauces",

    image: Pasta,
  },
  {
    id: 4,
    title: "Burgers Galore",
    description: "Added daily",
    image: Burger,
  },
];
