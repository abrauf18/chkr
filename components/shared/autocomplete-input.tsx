// components/GooglePlacesAutocomplete.tsx
import React, { useEffect, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import Script from 'next/script';
import { Input } from '../ui/input';

interface Props {
  name: string;
  placeholder: string;
}

const GooglePlacesAutocomplete: React.FC<Props> = ({ name, placeholder }) => {
  const { setValue } = useFormContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (scriptLoaded && inputRef.current) {
      const autocomplete = new google.maps.places.Autocomplete(inputRef.current);

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (place.formatted_address) {
          setValue(name, place.formatted_address);
        }
      });
    }
  }, [scriptLoaded, name, setValue]);

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyA3zX2wfM59W4JRCgja_k7Mbup0wuUXPTw&libraries=places`}
        onLoad={() => setScriptLoaded(true)}
        strategy="lazyOnload"
      />
      {/* <Input ref={inputRef} type="text" placeholder={placeholder} className="pl-10 bg-[#F9F8F8]"/> */}
      <input ref={inputRef} type="text" placeholder={placeholder} 
      
      className="pl-10 bg-[#F9F8F8] flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"/>
    </>
  );
};

export default GooglePlacesAutocomplete;

