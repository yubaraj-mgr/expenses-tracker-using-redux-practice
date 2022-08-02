import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { checkUserDetails } from "../helper/axiosHelper";
import MainLayout from "../layout/MainLayout";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const { status, message, result } = await checkUserDetails({
      email,
      password,
    });
    toast[status](message);
    if (status === "success") {
      window.localStorage.setItem("user", JSON.stringify(result));
      navigate("/dashboard");
    }
  };
  return (
    <MainLayout>
      <div className="d-flex justify-content-center mt-5">
        <Form
          className="border p-4 shadow-lg bg-light mt-5"
          onSubmit={handleOnSubmit}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={emailRef}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
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
