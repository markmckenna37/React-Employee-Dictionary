import React from "react";
import "./style.css";
import Table from "react-bootstrap/Table";

function EmployeeTable(props) {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>img</th>
          <th onClick={props.sortName}>Name</th>
          <th onClick={props.sortRole}>Role</th>
          <th>Phone Number</th>
          <th>Email Address</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map((employee) => (
          <tr>
            <td>
              <img src={employee.image} alt={employee.fullName}></img>
            </td>
            <td>{employee.fullName}</td>
            <td>{employee.role}</td>
            <td>{employee.phoneNumber}</td>
            <td>{employee.email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default EmployeeTable;
