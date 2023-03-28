import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

function FormPage(props) {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const idUser = localStorage.getItem("idUser");
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      await axios.post("http://localhost:8080/createPost", { title, body, idUser });
    } catch (e) {
      console.log("There is a problem!!");
    }
  }
  return (
    <>
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Title?"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                autoComplete="off"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="Body?"
                onChange={(e) => {
                  setBody(e.target.value);
                }}
                autoComplete="off"
              />
            </Form.Group>
            <Button type="submit" onClick={props.onHide}>
              Post
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FormPage;
