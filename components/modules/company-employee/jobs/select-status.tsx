"use client";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkin from "@/assets/icons/checkin";
import Checkout from "@/assets/icons/checkout";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

interface JobLocation {
  jobLocation: {
    lat: number;
    lng: number;
  };
}

const Select: React.FC<JobLocation> = ({ jobLocation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Checkout");
  const [currentLocation, setCurrentLocation] =
    useState<GeolocationCoordinates | null>(null);
  const [isLocationEnabled, setIsLocationEnabled] = useState(true);

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setIsLocationEnabled(false);
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        setIsLocationEnabled(true);
        setCurrentLocation(position.coords);
        const userCoords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        const jobCoords = {
          lat: jobLocation.lat,
          lng: jobLocation.lng,
        };
        const distance = calculateDistance(userCoords, jobCoords);
        if (distance <= 500) {
          setSelectedOption("Checkin");
          // return toast.info("User is within 500 meter of job location");
        } else {
          setSelectedOption("Checkout");
        }
      });
    }
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    if (option === "Checkin" && !isLocationEnabled) {
      return toast.error("Location must be enabled to Checkin.");
    }
    setSelectedOption(option);
    setIsOpen(false);
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentLocation(position.coords);
      console.log("Current location:", position.coords);
      const userCoords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      const jobCoords = {
        lat: jobLocation.lat,
        lng: jobLocation.lng,
      };
      const distance = calculateDistance(userCoords, jobCoords);
      console.log(distance);
      if (distance <= 500) {
        setSelectedOption("Checkin");
        return toast.info("User is within 500 meter of job location");
      } else {
        setSelectedOption("Checkout");
        return toast.error("You are not within the allowed range to Checkin.");
      }
    });
  };

  const calculateDistance = (coords1: any, coords2: any) => {
    // Function to calculate distance between two coordinates
    const R = 6371e3; // metres
    const φ1 = (coords1.lat * Math.PI) / 180; // φ, λ in radians
    const φ2 = (coords2.lat * Math.PI) / 180;
    const Δφ = ((coords2.lat - coords1.lat) * Math.PI) / 180;
    const Δλ = ((coords2.lng - coords1.lng) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // in metres
  };

  const getButtonStyle = () => {
    return selectedOption === "Checkin"
      ? "bg-blue-500 hover:bg-blue-600"
      : "bg-red-500 hover:bg-red-600";
  };

  const getIconColor = () => {
    return "white";
  };

  return (
    <div className="relative inline-block text-left">
      <ToastContainer />
      <div>
        <button
          onClick={toggleDropdown}
          className={`inline-flex justify-between items-center w-full rounded-3xl border border-gray-300 shadow-sm px-4 py-2 text-sm font-medium text-white focus:outline-none ${getButtonStyle()}`}
        >
          {selectedOption === "Checkin" ? (
            <Checkin color={getIconColor()} className="mr-2" />
          ) : (
            <Checkout color={getIconColor()} className="mr-2" />
          )}
          {selectedOption}
          {isOpen ? (
            <ChevronUp className="ml-2" />
          ) : (
            <ChevronDown className="ml-2" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              onClick={() => handleOptionClick("Checkin")}
              className={`${
                selectedOption === "Checkin" ? "bg-gray-100" : ""
              } flex items-center gap-2 px-4 py-2 text-sm text-gray-700 w-full text-left`}
              role="menuitem"
            >
              <Checkin color={selectedOption === "Checkin" ? "blue" : "gray"} />
              Checkin
              {selectedOption === "Checkin" && (
                <span className="ml-auto text-blue-500">
                  <div className="bg-primary rounded-full w-3 h-3 flex items-center">
                    <Check className="text-white" />
                  </div>
                </span>
              )}
            </button>
            <button
              onClick={() => handleOptionClick("Checkout")}
              className={`${
                selectedOption === "Checkout" ? "bg-gray-100" : ""
              } flex items-center gap-2 px-4 py-2 text-sm text-gray-700 w-full text-left`}
              role="menuitem"
            >
              <Checkout
                color={selectedOption === "Checkout" ? "red" : "gray"}
              />
              Checkout
              {selectedOption === "Checkout" && (
                <span className="ml-auto text-red-500">
                  <div className="bg-primary rounded-full w-3 h-3 flex items-center">
                    <Check className="text-white" />
                  </div>
                </span>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;

