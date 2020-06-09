import React, { useState, useEffect } from "react";
import NavBar from "./navbar/NavBar";
import ApplicationViews from "./ApplicationViews";
import './Kandy.css';

function Kandy() {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  const [hasUser, setHasUser] = useState(isAuthenticated());

  const setUser = user => {
    sessionStorage.setItem("credentials", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };

  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  };


  return (
    <>
      <NavBar hasUser={hasUser} clearUser={clearUser} />
      <ApplicationViews
        hasUser={hasUser}
        setUser={setUser}
        // checkedBox={checkedBox}
        // setCheckedBox={setCheckedBox}
      />
    </>
  );
};
  
  export default Kandy;