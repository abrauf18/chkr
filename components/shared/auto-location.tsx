"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import Script from "next/script";
import Autocomplete from "react-google-autocomplete";
import { MapPinned } from "lucide-react";

interface Props {
  name: string;
}

const AutoLocation: React.FC<Props> = ({ name }) => {
  const { setValue, watch } = useFormContext();

  const onPlaceSelectedHandler = (place: any) => {
    if (!place.geometry) return;

    const newAddress = {
      name: place.formatted_address,
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };
    setValue(name, newAddress);
  };

  React.useEffect(() => {
    setTimeout(() => (document.body.style.pointerEvents = ""), 0);
  });

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyA3zX2wfM59W4JRCgja_k7Mbup0wuUXPTw&libraries=places`}
        strategy="beforeInteractive"
      />
      <div className="flex flex-col w-full">
        <div className="relative w-full ">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <MapPinned className="h-5 w-5" color="#636363" />
          </span>
          <Autocomplete
            apiKey="AIzaSyA3zX2wfM59W4JRCgja_k7Mbup0wuUXPTw"
            onPlaceSelected={onPlaceSelectedHandler}
            options={{
              types: ["geocode", "establishment"],
            }}
            className="pl-10 p-2 w-full border border-gray-300 rounded-md bg-[#F9F8F8]"
            defaultValue={watch(name).name}
          />
        </div>
      </div>
    </>
  );
};

export default AutoLocation;

