import { useState, useEffect } from "react";
import Error from "./Error.jsx";
import Places from "./Places.jsx";
import { sortPlacesByDistance } from "../loc.js";

// ! component can't be async, so we can't use await fetch directly here
export default function AvailablePlaces({ onSelectPlace }) {
  const [ isFetching, setIsFetching ] = useState(false);
  const [ availablePlaces, setAvailablePlaces ] = useState([]);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const response = await fetch("http://localhost:3000/places");
        const resData = await response.json();
        if (!response.ok) {
          throw new Error('Failed to fetch places');
        }

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            resData.places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
          // ? this line here since if we put it below catch, it will be called instantly even before the fetch is done
          setIsFetching(false);
        });
      } catch (error) {
        setError({message: error.message || "An error occurred while fetching places"});
      }
    }
    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="Error fetching places" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching available places..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
