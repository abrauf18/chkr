'use client';

import React, { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import Autocomplete from 'react-google-autocomplete';

declare global {
  interface Window {
    google: any;
  }
}

interface LocationProps {
  latitude: number;
  longitude: number;
}

const Location: React.FC<LocationProps> = ({ latitude, longitude }) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);

  console.log('Props passed to Location:', { latitude, longitude });

  const isValidCoordinate = (coord: number) => !isNaN(coord) && isFinite(coord);

  const initializeMap = () => {
    if (window.google && mapRef.current) {
      if (isValidCoordinate(latitude) && isValidCoordinate(longitude)) {
        const initialCenter = new window.google.maps.LatLng(latitude, longitude);
        const mapInstance = new window.google.maps.Map(mapRef.current, {
          center: initialCenter,
          zoom: 10,
        });
        setMap(mapInstance);
      } else {
        console.error('Invalid latitude or longitude:', latitude, longitude);
      }
    }
  };

  useEffect(() => {
    if (window.google && mapRef.current && !map) {
      initializeMap();
    }
  }, [mapRef, map, latitude, longitude]);

  const onPlaceSelectedHandler = (place: google.maps.places.PlaceResult) => {
    if (!place.geometry) return;

    const newAddress = {
      lat: place.geometry.location?.lat() || 0,
      lng: place.geometry.location?.lng() || 0,
    };

    const center = new window.google.maps.LatLng(latitude, longitude);
    console.log('center', center)
    const to = new window.google.maps.LatLng(
      place.geometry.location?.lat() || 0,
      place.geometry.location?.lng() || 0
    );
    
    console.log('Center point:', center);

    const contains =
      window.google.maps.geometry.spherical.computeDistanceBetween(center, to) <= 80467.2;

    if (contains) {
      console.log('Go ahead, how can we help you');
    } else {
      console.log('Sorry, we do not offer our service yet');
    }

    if (map) {
      map.setCenter(newAddress);
      new window.google.maps.Marker({
        position: newAddress,
        map,
      });
    }
  };

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyA3zX2wfM59W4JRCgja_k7Mbup0wuUXPTw&libraries=geometry,places`}
        strategy="beforeInteractive"
        onLoad={initializeMap}
      />
      <Autocomplete
        apiKey="AIzaSyA3zX2wfM59W4JRCgja_k7Mbup0wuUXPTw"
        onPlaceSelected={onPlaceSelectedHandler}
        componentRestrictions={{ country: '*' }}
        options={{
          types: ['geocode', 'establishment'],
        }}
      />
      {/* <div ref={mapRef} style={{ height: '500px', width: '100%' }} /> */}
    </>
  );
};

export default Location;
