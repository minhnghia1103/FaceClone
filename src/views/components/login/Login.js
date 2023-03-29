import React, { useEffect } from "react";
import FormLogin from "./formLogin/FormLogin";
import "./login.scss";

function Login(props) {
  return (
    <>
      <div className="container ">
        <div className="row row1">
          <div className=" col-lg">
            <img className="text-center fs-3" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="#" />
            <h2 className="text-start fs-3">Facebook helps you connect and share with the people in your life.</h2>
          </div>
          <div className="  col-lg">
            <FormLogin checkLoggined={props.setLoggedIn} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
