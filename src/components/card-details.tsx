import { Card } from "../classes";

interface CardDetailsProps {
  card: Card;
}

const CardDetails = ({ card }: CardDetailsProps) => {
  return (
    <div
      className="rounded-xl relative shadow-xl dark:shadow-white/20 dark:shadow-md"
      key={card.id}
    >
      <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
        <p className="font-bold text-2xl pt-4 px-2">{card.title}</p>
        <p className="px-2">{card.description}</p>
        <button className="border-white bg-white text-black mx-2 absolute bottom-4">
          Order Now
        </button>
      </div>
      <img
        src={card.image}
        alt="/"
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
      />
    </div>
  );
};

export default CardDetails;
