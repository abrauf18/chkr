import React, { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

interface SmallMapProps {
  location?: string;
}

const SmallMap: React.FC<SmallMapProps> = ({ location }) => {
  const [placeId, setPlaceId] = useState<string | null>(null);
  const [loader, setLoader] = useState<boolean>(true);
  useEffect(() => {
    if (location) {
      const fetchPlaceId = async () => {
        try {
          setLoader(true);
          const response = await fetch(
            "https://places.googleapis.com/v1/places:searchText",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "X-Goog-Api-Key": "AIzaSyAc_Se5g1fk6VHlnvP6kKz2xbMuznFQcu0",
                "X-Goog-FieldMask":
                  "places.id,places.displayName,places.formattedAddress",
              },
              body: JSON.stringify({ textQuery: location }),
            }
          );

          const data = await response.json();
          if (data.places && data.places.length > 0) {
            setPlaceId(data.places[0].id);
          }
        } catch (err) {
          console.log(err);
        } finally {
          setLoader(false);
        }
      };

      fetchPlaceId();
    }
  }, [location]);

  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        height: 0,
        overflow: "hidden",
      }}
    >
      {loader ? (
        <div className="flex flex-col space-y-3 bg-white mt-4 p-4 rounded-3xl">
          <Skeleton className="h-[80px] md:h-[250px] w-full bg-gray-200 rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px] bg-gray-200" />
            <Skeleton className="h-4 w-[200px] bg-gray-200" />
          </div>
        </div>
      ) : (
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0, position: "absolute", top: 0, left: 0 }}
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/place?q=place_id:${placeId}&key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}`}
        />
      )}
    </div>
  );
};

export default SmallMap;

