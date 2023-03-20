import React, { useEffect } from "react";

function InputPage() {
  return (
    <>
      <label for="page"></label>
      <input type="text" id="page" value="What's on your mind?" style={{ cursor: "pointer" }}></input>
    </>
  );
}

export default InputPage;
