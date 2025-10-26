import React, { ReactNode } from "react";

interface CardHolderProps {
  children: ReactNode;
}

const CardHolder: React.FC<CardHolderProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-10">Parteneri</h1>
      <div className="">
        {children}
      </div>
    </div>
  );
};

export default CardHolder;
