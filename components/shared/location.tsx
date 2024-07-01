import React, { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

interface LocationProps {
  lat: number;
  lng: number;
}

export const Location: React.FC = () => {
  const [location, setLocation] = useState<LocationProps | null>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (location && mapRef.current) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: location,
        zoom: 15,
      });

      const marker = new window.google.maps.Marker({
        position: location,
        map: map,
        draggable: true,
      });

      marker.addListener('dragend', (event: google.maps.MapMouseEvent) => {
        if (event.latLng) {
          setLocation({
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
          });
          console.log(`Latitude: ${event.latLng.lat()}, Longitude: ${event.latLng.lng()}`);
        }
      });
    }
  }, [location]);

  const initializeAutocomplete = () => {
    if (inputRef.current) {
      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current);
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (place.geometry && place.geometry.location) {
          const lat = place.geometry.location.lat();
          const lng = place.geometry.location.lng();
          setLocation({ lat, lng });
          console.log(`Latitude: ${lat}, Longitude: ${lng}`);
        }
      });
    }
  };

  return (
    <>
      <Script
        id="google-maps"
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBRix4QiKpNFYN5uXI0jMZQHYEBEQrepBw&libraries=places"
        onLoad={() => {
          initializeAutocomplete();
          if (mapRef.current) {
            new google.maps.Map(mapRef.current, {
              center: { lat: -34.397, lng: 150.644 },
              zoom: 8,
            });
          }
        }}
      />
      <div className="p-4">
        <p className="mb-4 text-lg">Hi</p>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search location"
          className="px-4 py-2 border rounded"
        />
        <div
          ref={mapRef}
          className="w-full h-96 mt-4"
        ></div>
      </div>
    </>
  );
};
