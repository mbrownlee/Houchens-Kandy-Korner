import React, { useState, useEffect } from "react";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    
  });

  const handleFieldChange = (evt) => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    props.setUser(credentials);
    props.history.push("/productTypes");
  };

//   const trackCheckedBox = () => {
//     if (!props.checkedBox) {
//       props.setCheckedBox(true);
//     } else if (props.checkedBox) {
//       props.setCheckedBox(false);
//     }
//   };

  return (
    <form onSubmit={handleLogin}>
      <fieldset>
        <h3>Please sign in</h3>
        <div className="formgrid">
          <input
            onChange={handleFieldChange}
            type="username"
            id="username"
            placeholder="username"
            required=""
            autoFocus=""
          />
          <label htmlFor="username">User Name</label>

          <input
            onChange={handleFieldChange}
            type="password"
            id="password"
            placeholder="Password"
            required=""
          />
          <label htmlFor="inputPassword">Password</label>
        </div>
        <button type="submit">Sign in</button>
        {/* <label htmlFor="checkedBox">Remember Me</label>
        <input
          onClick={trackCheckedBox}
          id="checkedBox"
          type="checkbox"
        ></input> */}
      </fieldset>
    </form>
  );
};

export default Login;