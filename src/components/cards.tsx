import { cardData } from "../data/card-data";
import CardDetails from "./card-details";

const Cards = () => {
  return (
    <div className="flex flex-row justify-evenly">
      {cardData.map((card) => (
        <CardDetails card={card} />
      ))}
    </div>
  );
};

export default Cards;
