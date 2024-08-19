"use client";

import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import Script from "next/script";
import Autocomplete from "react-google-autocomplete";
import { MapPinned } from "lucide-react";
import Loader from "./loader";

interface Props {
  name: string;
}

const AutoLocation: React.FC<Props> = ({ name }) => {
  const { setValue, watch } = useFormContext();
  const [isLoading, setIsLoading] = useState(false);

  const onPlaceSelectedHandler = (place: any) => {
    if (!place.geometry) return;

    const newAddress = {
      name: place.formatted_address,
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };
    setValue(name, newAddress);
    setIsLoading(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (inputValue.length > 0) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  };

  const handleScriptLoad = () => {
    console.log("Google Maps script loaded successfully");
  };

  const handleScriptError = () => {
    setIsLoading(false); // Stop loading if script fails to load
    console.error("Failed to load Google Maps script");
  };

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyA3zX2wfM59W4JRCgja_k7Mbup0wuUXPTw&libraries=places`}
        strategy="beforeInteractive"
        onLoad={handleScriptLoad} // Handle successful load
        onError={handleScriptError} // Handle load error
      />
      <div className="flex flex-col w-full">
        <div className="relative w-full">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <MapPinned className="h-5 w-5" color="#636363" />
          </span>
          <Autocomplete
            onPlaceSelected={onPlaceSelectedHandler}
            options={{
              types: ["geocode", "establishment"],
            }}
            className="pl-10 p-2 w-full border border-gray-300 rounded-md bg-[#F9F8F8]"
            defaultValue={watch(name)?.name}
            onChange={handleInputChange}
          />
        </div>
        {isLoading && (
          <div className="flex justify-center items-center py-2">
            <div /> <Loader />
          </div>
        )}
      </div>
    </>
  );
};

export default AutoLocation;

