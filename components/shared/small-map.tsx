import React from 'react';
import { LoadScript, GoogleMap, Marker, Library } from '@react-google-maps/api';

interface SmallMapProps {
  location?: string; 
}

const libraries: Library[] = ['places']; // Include places library (optional)

const SmallMap: React.FC<SmallMapProps> = ({ location }) => {
  const mapContainerStyle = {
    width: 'w-full', 
    height: 'h-200', 
  };

  const center = {
    lat: 0,
    lng: 0, 
  };

  const handleClick = () => {
    // Handle map click event (optional)
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAjBAqU7xyjyeovJQBo1MrCo-96wdYBIKA" 
      libraries={libraries}
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10} 
        center={center}
        onClick={handleClick}
      >
        {location && ( 
          <Marker position={{ lat: parseFloat(location.split(',')[0]), lng: parseFloat(location.split(',')[1]) }} />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default SmallMap;
