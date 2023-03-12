import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState, useEffect } from "react";
import Register from "../register/Register";

function FormLogin() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Button variant="primary" type="submit" className="w-100">
          Submit
        </Button>
        <Form.Text className="text-muted">Forgotten password?</Form.Text>
      </Form.Group>

      <Button variant="success" className="w-50 " onClick={() => setModalShow(true)}>
        Create new account
      </Button>
      <Register show={modalShow} onHide={() => setModalShow(false)} onShow={() => setModalShow(true)} />
    </Form>
  );
}

export default FormLogin;
