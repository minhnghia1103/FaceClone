import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState, useEffect } from "react";
import Register from "../register/Register";
import axios from "axios";

function FormLogin(props) {
  const [modalShow, setModalShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/login", { email, password });
      if (response.data.status) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("fullname", response.data.data.fullname);
        props.checkLoggined(true);
      } else {
        alert("Sai cmmm mat khau/email r");
      }
    } catch (e) {
      console.log("There was a problem.");
    }
  }
  return (
    <>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" autoComplete="off" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Button variant="primary" type="submit" className="w-100">
            Submit
          </Button>
          <Form.Text className="text-muted">Forgotten password?</Form.Text>
        </Form.Group>
      </Form>
      <Button variant="success" className="w-50 " onClick={() => setModalShow(true)}>
        Create new account
      </Button>
      <Register show={modalShow} onHide={() => setModalShow(false)} onShow={() => setModalShow(true)} />
    </>
  );
}

export default FormLogin;
