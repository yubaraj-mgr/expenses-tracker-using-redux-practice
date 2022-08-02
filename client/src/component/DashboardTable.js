import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

export const DashboardTable = () => {
  return (
    <>
      <Table striped bordered hover className="mt-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Title</th>
            <th>Expenses</th>
            <th>Income</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1/1/1</td>
            <td>Title</td>
            <td>Title</td>
            <td>Title</td>
            <td>
              <Button variant="danger">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <div className="text-end fw-bold">Balance: $1000</div>
    </>
  );
};
