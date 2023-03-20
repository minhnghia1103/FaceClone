import React, { useEffect } from "react";
import FormLogin from "./FormLogin";

function Login(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="#" />
            <h2>Facebook helps you connect and share with the people in your life.</h2>
          </div>
          <div className="col">
            <FormLogin checkLoggined={props.setLoggedIn} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
