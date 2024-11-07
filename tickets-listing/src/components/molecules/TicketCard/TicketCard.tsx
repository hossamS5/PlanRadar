import React from "react";

interface IProps {
  card: {
    id: number;
    subject: string;
    priority: string;
    status: string;
    description: string;
  };
}

const TicketCard: React.FC<IProps> = ({ card }) => {
  return (
    <div className="w-full p-4 rounded-[20px] border border-grayPalette-300 flex flex-col gap-4 shadow-md cursor-pointer">
      <div className="flex cards-center justify-between gap-3">
        <h2 className="text-mainTheme text-xl font-bold">{card.subject}</h2>

        <span className="p-1 flex cards-center bg-primary-300 text-white rounded-lg text-xs">
          {card.status}
        </span>
      </div>

      <div className="text-[#464646]">{card.description}</div>

      <div className="text-xs bg-primary-800 text-white rounded-lg p-[6px] w-fit">
        {card.priority}
      </div>
    </div>
  );
};

export default TicketCard;
