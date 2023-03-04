import { Card } from "../classes";

interface CardDetailsProps {
  card: Card;
}

const CardDetails = ({ card }: CardDetailsProps) => {
  return (
    <div className="w-[200px] object-cover border" key={card.id}>
      <h1>{card.title}</h1>
      <p>{card.description}</p>
      <img src={card.image} className="rounded-md" alt={card.title} />
    </div>
  );
};

export default CardDetails;
