import React, { useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import Script from "next/script";
import { MapPin } from "lucide-react";

interface Props {
  name: string;
}

const GoogleMapsGeofencing: React.FC<Props> = ({ name }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const searchBoxRef = useRef<HTMLInputElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [drawingManager, setDrawingManager] =
    useState<google.maps.drawing.DrawingManager | null>(null);
  const { setValue } = useFormContext();

  const initMap = () => {
    if (mapRef.current) {
      const mapInstance = new google.maps.Map(mapRef.current, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
        gestureHandling: "greedy",
      });
      setMap(mapInstance);

      const drawingManagerInstance = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.POLYGON,
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: ["polygon"] as google.maps.drawing.OverlayType[],
        },
        polygonOptions: {
          editable: true,
          draggable: true,
        },
      });
      drawingManagerInstance.setMap(mapInstance);
      setDrawingManager(drawingManagerInstance);

      const logCoordinates = (
        path: google.maps.MVCArray<google.maps.LatLng>
      ) => {
        const coordinates = path.getArray().map((coord) => ({
          lat: coord.lat(),
          lng: coord.lng(),
        }));
        console.log("Polygon coordinates:", coordinates);
        setValue(name, coordinates);
      };

      google.maps.event.addListener(
        drawingManagerInstance,
        "overlaycomplete",
        (event: google.maps.drawing.OverlayCompleteEvent) => {
          if (event.type === google.maps.drawing.OverlayType.POLYGON) {
            const newPolygon = event.overlay as google.maps.Polygon;
            const path = newPolygon.getPath();
            logCoordinates(path);
            google.maps.event.addListener(path, "set_at", () =>
              logCoordinates(path)
            );
            google.maps.event.addListener(path, "insert_at", () =>
              logCoordinates(path)
            );
          }
        }
      );

      if (searchBoxRef.current) {
        const autocomplete = new google.maps.places.Autocomplete(
          searchBoxRef.current
        );
        autocomplete.bindTo("bounds", mapInstance);
        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          if (!place.geometry || !place.geometry.location) return;
          mapInstance.setCenter(place.geometry.location);
          mapInstance.setZoom(15);
        });
      }
    }
  };
  useEffect(() => {
    if (window.google) {
      initMap();
    } else {
      console.error("Google Maps API not loaded");
    }
  }, [name, setValue]);

  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyA3zX2wfM59W4JRCgja_k7Mbup0wuUXPTw&libraries=drawing,places`}
        onLoad={() => {
          if (window.google && mapRef.current && !map) {
            initMap();
          }
        }}
        strategy="lazyOnload"
      />
      <div className="flex flex-col w-full">
        <div className="relative mb-4 w-full z-50">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <MapPin className="h-5 w-5" />
          </span>
          <input
            ref={searchBoxRef}
            type="text"
            placeholder="Search for a location"
            className="pl-10 p-2 w-full border border-gray-300 rounded-md bg-[#F9F8F8]"
          />
        </div>
        <div className="z-10">
          <p className="text-left text-xs md:text-sm mb-4">
            Please set the boundary on the map.
          </p>
          <div ref={mapRef} className="h-64 w-full rounded-xl" />
        </div>
      </div>
    </>
  );
};

export default GoogleMapsGeofencing;

