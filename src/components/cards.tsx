import { cardData } from "../data/card-data";
import CardDetails from "./card-details";

const Cards = () => {
  return (
    <div className="w-full mx-auto py-12 px-4 grid md:grid-cols-4 gap-3">
      {cardData.map((card) => (
        <CardDetails card={card} />
      ))}
    </div>
  );
};

export default Cards;
