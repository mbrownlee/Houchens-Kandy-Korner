import React, { useState, useEffect } from "react";
import LocationCard from "./LocationCard";
import LocationManager from "../../modules/LocationManager";
// import "./LocationList.css";

const LocationList = (props) => {
 
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    
    return LocationManager.getAll().then((locationsFromAPI) => {
      setLocations(locationsFromAPI);
    });
  };
//   const deleteLocation = (id) => {
//     LocationManager.delete(id).then(() =>
//       LocationManager.getAll().then(setLocations)
//     );
//   };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getLocations();
  }, []);

 
  return (
    <>
      <div className="container-cards">
        {locations.map((location) => (
          <LocationCard
            key={location.id}
            locay={location}
            // deleteLocation={deleteLocation}
            {...props}
           
           
          />
        ))}
      </div>
      {/* <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/location/new");
          }}
        >
          New Location
        </button>
      </section> */}
    </>
  );
};
export default LocationList;