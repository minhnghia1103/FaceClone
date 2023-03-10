import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Register(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Sigh UP</Modal.Title>
        <label htmlFor="contained-modal-title-vcenter">It's quick and easy</label>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicFullName">
            <Form.Control type="text" placeholder="Fullname" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email address" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check inline label="Female" name="group1" type={type} id={`inline-${type}-1`} />
              <Form.Check inline label="Male" name="group1" type={type} id={`inline-${type}-2`} />
            </div>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Register;
