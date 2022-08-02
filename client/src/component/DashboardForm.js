import React from "react";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const DashboardForm = () => {
  return (
    <div className="">
      <Form className=" p-4 mt-5">
        <Row>
          <Col>
            <Form.Control placeholder="Transaction Name" />
          </Col>
          <Col>
            <Form.Control placeholder="Date" type="date" />
          </Col>
          <Col>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>Income</option>
              <option>Expenses</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Control placeholder="amount" type="number" />
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default DashboardForm;
