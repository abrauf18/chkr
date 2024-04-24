import React from 'react';
import cardCheck from "@/app/assets/icons/cardcheck.svg"
import card from "@/app/assets/icons/card.svg"
import Image from 'next/image';

interface RegisteredCard {
  cardType: string;
  cvv: string;
  cardOwner: string;
  expiryDate: string;
}

const RegisteredCards: React.FC<RegisteredCard> = ({ cardType, cvv, cardOwner, expiryDate }) => {
  return (
    <div className="flex flex-col bg-white w-full shadow-md rounded-3xl px-8 pt-6 pb-8 my-10">
      <h1 className="text-xl font-bold mb-4">Registered Cards</h1>

      <ul className="flex items-center w-full justify-between text-base font-semibold ">
        <li className="p-2"><Image src={cardCheck} alt='cardcheck' className='h-7 w-7' /></li>
        <li >Card</li>
        <li >CVV</li>
        <li >Card Owner</li>
        <li >Expiry Date</li>
      </ul>
      <ul className="flex items-center w-full justify-between text-center text-base font-semibold pr-6">
        <li className="p-2"><Image src={card} alt='card' className='h-7 w-7' /></li>
        <li className='pr-6'>{cardType}</li>
        <li className='pr-6'>{cvv}</li>
        <li className='pr-8'>{cardOwner}</li>
        <li >{expiryDate}</li>
      </ul>
    </div>

  );
};

export default RegisteredCards;
