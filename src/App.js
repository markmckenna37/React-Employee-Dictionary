import React from "react";
import EmployeeTable from "./components/EmployeeTable";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";

//react class
class App extends React.Component {
  //establishing the state of our component for employees, the employees to be filtered by sort/search, and the search terms
  state = {
    employees,
    filteredEmployees: employees,
    search: "",
  };

  //Function to handle input changes to the search bar
  handleInputChange = (event) => {
    // targeting the value of the search field
    const value = event.target.value;

    //Setting a variable for the employees that are filtered through search. Setting the value to lowercase, and checking what matches with what "starts with" the given value
    const filteredEmployees = this.state.employees.filter((employee) =>
      employee.fullName.toLowerCase().startsWith(value.toLowerCase())
    );
    //updating the filtered employees list
    this.setState({ filteredEmployees });

    //setting the state of search to the given value
    this.setState({
      search: value,
    });
  };

  //Function to sort the employees by their name alphabetically.
  sortName = () => {
    //Setting a variable to store the sorted employees. Checks if a > b (alphabetically)
    const sortedEmployees = this.state.filteredEmployees.sort((a, b) =>
      a.fullName > b.fullName ? 1 : -1
    );

    //sets the state of the filtered employees to the sorted list of employees
    this.setState({ filteredEmployees: sortedEmployees });
  };
  //Function to sort the employees by their role alphabetically.  Checks if a > b (alphabetically)
  sortRole = () => {
    const sortedRoles = this.state.filteredEmployees.sort((a, b) =>
      a.role > b.role ? 1 : -1
    );

    //sets the state of the filtered employees to the sorted list of employees
    this.setState({ filteredEmployees: sortedRoles });
  };

  //Rendering our app, returns our Wrapper -> Title -> Employee table components
  render() {
    return (
      <Wrapper>
        <Title>Employee Roster</Title>
        {/* Search field */}
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
          //Employee table, containing employees, sortName, or SortRole
          employees={this.state.filteredEmployees}
          sortName={this.sortName}
          sortRole={this.sortRole}
        />
      </Wrapper>
    );
  }
}

// Exporting our App for index.js
export default App;
