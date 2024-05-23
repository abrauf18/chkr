"use client"
import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Checkin from '@/assets/icons/checkin';
import Checkout from '@/assets/icons/checkout';

export default function SelectStatus() {
  const [selected, setSelected] = useState<'checkin' | 'checkout'>('checkin');

  const handleValueChange = (newValue: 'checkin' | 'checkout') => {
    setSelected(newValue);
  };

  const getColor = () => {
    switch (selected) {
      case 'checkin':
        return 'bg-blue-400 color-white';
      case 'checkout':
        return 'bg-red-500';
      default:
        return '';
    }
  };

  const getIconColor = () => {
    return 'white';
  };

  return (
    <Select value={selected} onValueChange={handleValueChange}>
      <SelectTrigger className={`w-[9rem] rounded-2xl text-white ${getColor()}`}>
        <SelectValue className={`${getIconColor()}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="checkin">
          <div className='flex gap-2 items-center justify-center'>
            <Checkin />
            <span>Checkin</span>
          </div>
        </SelectItem>
        <SelectItem value="checkout">
          <div className='flex gap-2 items-center justify-center'>
            <Checkout />
            <span>Checkout</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
