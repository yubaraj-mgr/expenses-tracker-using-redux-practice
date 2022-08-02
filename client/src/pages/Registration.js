import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import MainLayout from "../layout/MainLayout";
import { Link } from "react-router-dom";
import { createUser } from "../helper/axiosHelper";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Registration = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [userDetails, setUserDetails] = useState(initialState);

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (userDetails.password === userDetails.confirmPassword) {
      const { confirmPassword, ...newUserDetails } = userDetails;
      const { status, message } = await createUser(newUserDetails);
      toast[status](message);
      if (status === "success") {
        navigate("/login");
      }
    } else {
      toast.error("Password not matched");
    }
  };
  return (
    <MainLayout>
      <div className="d-flex justify-content-center mt-5">
        <Form
          className="border p-4 shadow-lg bg-light mt-5"
          onSubmit={handleOnSubmit}
        >
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleOnChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={handleOnChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      Already have Accont? <Link to="/login">Go to Login</Link>
    </MainLayout>
  );
};

export default Registration;
