import Pasta from "../assets/pasta.jpeg";
import Pizza from "../assets/pizza.jpeg";
import Sandwich from "../assets/sandwich.jpeg";
import { Card } from "../classes";

export const cardData: Card[] = [
  {
    id: 1,
    title: "Sandwich",
    description: "This is a sandwich",
    image: Sandwich,
  },
  {
    id: 2,
    title: "Pizza",
    description: "This is a pizza",
    image: Pizza,
  },
  {
    id: 3,
    title: "Pasta",
    description: "This is a pasta",
    image: Pasta,
  },
];
