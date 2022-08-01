import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const Login = () => {
  return (
    <MainLayout>
      <div className="d-flex justify-content-center mt-5">
        <Form className="border p-4 shadow-lg bg-light mt-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      New here? <Link to="/registration">Register Account</Link>
    </MainLayout>
  );
};

export default Login;
