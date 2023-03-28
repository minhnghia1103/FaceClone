import React, { useEffect } from "react";
import FormPage from "./formPage/FormPage";

function InputPage() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <label htmlFor="page"></label>
      <button style={{ cursor: "pointer" }} onClick={() => setModalShow(true)}>
        What's on your mind?
      </button>
      <FormPage show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default InputPage;
