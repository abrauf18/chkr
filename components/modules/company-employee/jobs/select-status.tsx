"use client"
import React, { useState } from 'react';
import Checkin from '@/assets/icons/checkin';
import Checkout from '@/assets/icons/checkout';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

const Select: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Checkin');
  const [currentLocation, setCurrentLocation] = useState<GeolocationCoordinates | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (option === 'Checkin') {
      console.log(currentLocation)
      // Get current location on Checkin click
      navigator.geolocation.getCurrentPosition(
        (position) => setCurrentLocation(position.coords),
        (error) => console.error('Error getting location:', error)
      );
    }
  };

  const getButtonStyle = () => {
    return selectedOption === 'Checkin' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-red-500 hover:bg-red-600';
  };

  const getIconColor = () => {
    return 'white';
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className={`inline-flex justify-between items-center w-full rounded-3xl border border-gray-300 shadow-sm px-4 py-2 text-sm font-medium text-white focus:outline-none ${getButtonStyle()}`}
        >
          {selectedOption === 'Checkin' ? <Checkin color={getIconColor()} className="mr-2" /> : <Checkout color={getIconColor()} className="mr-2" />}
          {selectedOption}
          {isOpen ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button
              onClick={() => handleOptionClick('Checkin')}
              className={`${selectedOption === 'Checkin' ? 'bg-gray-100' : ''} flex items-center gap-2 px-4 py-2 text-sm text-gray-700 w-full text-left`}
              role="menuitem"
            >
              <Checkin color={selectedOption === 'Checkin' ? 'blue' : 'gray'} />
              Checkin
              {selectedOption === 'Checkin' && <span className="ml-auto text-blue-500">
                <div className='bg-primary rounded-full w-3 h-3 flex items-center'>
                  <Check className='text-white' />
                </div>
              </span>}
            </button>
            <button
              onClick={() => handleOptionClick('Checkout')}
              className={`${selectedOption === 'Checkout' ? 'bg-gray-100' : ''} flex items-center gap-2 px-4 py-2 text-sm text-gray-700 w-full text-left`}
              role="menuitem"
            >
              <Checkout color={selectedOption === 'Checkout' ? 'red' : 'gray'} />
              Checkout
              {selectedOption === 'Checkout' && <span className="ml-auto text-red-500">
                <div className='bg-primary rounded-full w-3 h-3 flex items-center'>
                  <Check className='text-white' />
                </div>
              </span>}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
