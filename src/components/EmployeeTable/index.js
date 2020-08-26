import React from "react";
import "./style.css";
import Table from "react-bootstrap/Table";
import {FaSortUp} from "react-icons/fa"

//Component to render our employee table
function EmployeeTable(props) {
  return (
    //React/bootstrap table class
    <Table striped bordered hover variant="dark">
      {/* Table headings */}
      <thead>
        <tr>
          <th>Picture</th>
          {/* Click events to sort by employee names and roles */}
          <th onClick={props.sortName}>Name <FaSortUp/></th>
          <th onClick={props.sortRole}>Role <FaSortUp/></th>
          <th>Phone Number</th>
          <th>Email Address</th>
        </tr>
      </thead>
      <tbody>
        {/* Mapping our employees database over the table */}
        {props.employees.map((employee) => (
          <tr>
            <td>
            {/* Populating the table with image, name, roll, phone number, and email */}
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

//Exporting the table
export default EmployeeTable;
