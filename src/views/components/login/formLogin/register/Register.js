import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

function Register(props) {
  const [fullname, setFullname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassWord] = useState();
  const [checkInfor, setCheckInfor] = useState(true);

  async function handleSubmit(e) {
    e.preventDefault();
    if (fullname && email && password) {
      try {
        const data = await axios.post("http://localhost:8080/adduser", { fullname, email, password });
        let logFromServer = data.data.status;
        if (logFromServer === "existEmail") {
          setCheckInfor(false);
          alert("Email đã tồn tại trong hệ thống");
        } else if (logFromServer === "success") {
          setCheckInfor(true);
          console.log("User was successfully created.");
          setFullname("");
          setEmail("");
          setPassWord("");
        } else {
          console.log("There was an error not exception.");
        }
      } catch (e) {
        console.log("There was an error.");
      }
    } else {
      setCheckInfor(false);
      alert("Not enought information!");
    }
  }

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Sigh UP</Modal.Title>
        <label htmlFor="contained-modal-title-vcenter">It's quick and easy</label>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicFullName">
            <Form.Control type="text" placeholder="Fullname" onChange={(e) => setFullname(e.target.value)} autoComplete="off" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} autoComplete="off" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassWord(e.target.value)} autoComplete="off" />
          </Form.Group>

          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check inline label="Female" name="group1" type={type} id={`inline-${type}-1`} />
              <Form.Check inline label="Male" name="group1" type={type} id={`inline-${type}-2`} />
            </div>
          ))}
          <Button type="submit" variant="success" onClick={fullname && email && password && checkInfor ? props.onHide : props.onShow}>
            Sign Up
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default Register;
