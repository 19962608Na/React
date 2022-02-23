import React, { Component } from "react";
import DetailStaff from "./DetailStaffComponent";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import Header from "../components/HeaderComponent";
import Footer from "../components/FooterComponent";
import StaffList from "./StaffListComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import Department from "./DepartmentComponent";
import SalaryTable from "./SalaryTableComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      department: DEPARTMENTS,
    };
  }

  onAddStaff = (newStaff) => {
    this.setState({ staffs: [...this.state.staffs, newStaff] });
  };

  render() {
    const StaffId = ({ match }) => {
      return (
        <DetailStaff
          staff={this.state.staffs.filter(
            (staff) => staff.id === parseInt(match.params.id, 10)
          )[0]}
        />
      );
    };

    return (
      
    );
  }
}
export default Main;