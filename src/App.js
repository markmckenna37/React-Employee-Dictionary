import React from "react";
import EmployeeTable from "./components/EmployeeTable";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";

class App extends React.Component {
  state = {
    employees,
    filteredEmployees: employees,
    search: "",
  };

  handleInputChange = (event) => {
    const value = event.target.value;

    const filteredEmployees = this.state.employees.filter((employee) =>
      employee.fullName.toLowerCase().startsWith(value.toLowerCase())
    );
    this.setState({ filteredEmployees });

    this.setState({
      search: value,
    });
  };

  sortName = () => {
    const sortedEmployees = this.state.filteredEmployees.sort((a, b) =>
      a.fullName > b.fullName ? 1 : -1
    );

    this.setState({ filteredEmployees: sortedEmployees });
  };
  sortRole = () => {
    const sortedRoles = this.state.filteredEmployees.sort((a, b) =>
      a.role > b.role ? 1 : -1
    );

    this.setState({ filteredEmployees: sortedRoles });
  };

  render() {
    return (
      <Wrapper>
        <Title>Employee Roster</Title>
        <form className="form mb-3">
          <input
            value={this.state.search}
            name="search"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Search for an employee"
          />
        </form>
        <EmployeeTable
          employees={this.state.filteredEmployees}
          sortName={this.sortName}
          sortRole={this.sortRole}
        />
      </Wrapper>
    );
  }
}

export default App;
