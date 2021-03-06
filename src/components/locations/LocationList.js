import React, { useState, useEffect } from "react";
import LocationCard from "./LocationCard";
import LocationManager from "../../modules/LocationManager";

const LocationList = (props) => {
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    return LocationManager.getAll().then((locationsFromAPI) => {
      setLocations(locationsFromAPI);
    });
  };

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <>
      <div className="container-cards">
        {locations.map((location) => (
          <LocationCard key={location.id} locay={location} {...props} />
        ))}
      </div>
    </>
  );
};
export default LocationList;
