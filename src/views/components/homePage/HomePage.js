import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import InputPage from "./input-page/InputPage";

function HomePage(props) {
  function handLogouted() {
    props.setLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  }
  return (
    <>
      <div>ngu nhu bo</div>
      <button onClick={handLogouted}>loggouted</button>
      <br />
      <InputPage />
    </>
  );
}

export default HomePage;
