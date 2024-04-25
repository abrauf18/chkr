interface RegisteredCard {
  cardType: string;
  cvv: string;
  cardOwner: string;
  expiryDate: string;
}

import React from "react";
import CardCheck from "@/assets/icons/Cardcheck"
import Card from "@/assets/icons/Card";

const RegisteredCards: React.FC<RegisteredCard> = ({
  cardType,
  cvv,
  cardOwner,
  expiryDate,
}) => {
  return (
    <div className="flex flex-col bg-white w-full shadow-md rounded-3xl pt-6 pb-8 md:my-10">
      <div className="flex w-full items-center px-8">
        <Card className="h-6 w-6 mr-2" />
        <span className="font-semibold text-base md:text-lg">
          Registered Cards
        </span>
      </div>
      <hr className="w-full my-6" />
      <div className="flex md:gap-24 gap-8 items-center w-full text-xs md:text-base px-4 md:px-8">
        <div className="flex flex-col gap-y-4">
          <CardCheck className="md:h-6 h-5" />
          <Card className="md:h-5 h-5" />
        </div>
        <div className="flex flex-col gap-y-4">
          <h1 className="font-semibold">Card</h1>
          <span className="Rubik">{cardType}</span>
        </div>
        <div className="flex flex-col gap-y-4">
          <h1 className="font-semibold">CVV</h1>
          <span className="Rubik">{cvv}</span>
        </div>
        <div className="flex flex-col gap-y-4">
          <h1 className="font-semibold">Card owner</h1>
          <span className="Rubik">{cardOwner}</span>
        </div>
        <div className="flex flex-col gap-y-4">
          <h1 className="font-semibold">Expiry date</h1>
          <span className="Rubik">{expiryDate}</span>
        </div>
      </div>

    </div>
  );
};

export default RegisteredCards;

