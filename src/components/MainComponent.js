import React, { Component } from "react";
import DetailStaff from "./DetailStaffComponent";
import Header from "../components/HeaderComponent";
import Footer from "../components/FooterComponent";
import StaffList from "./StaffListComponent";
import Department from "./DepartmentComponent";
import SalaryTable from "./SalaryTableComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import {connect} from "react-redux";

// Khai báo state reducer
const mapStateToProps = state => {
  return {
    staffs: state.staffs,
    departments: state.departments    
  }
}

class Main extends Component {
  constructor(props) {
    super(props);
    
  }

  onAddStaff = (newStaff) => {
    this.setState({ staffs: [...this.props.staffs, newStaff] });
  };

  render() {
    const StaffId = ({ match }) => {
      return (
        <DetailStaff
          staff={this.props.staffs.filter(
            (staff) => staff.id === parseInt(match.params.id, 10)
          )[0]}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/staff"
            component={() => <StaffList staff={this.props.staffs}  onAddStaff={this.onAddStaff} />}
          />
          
          <Route exact path="/staff/:id" component={StaffId} />
          <Route
            exact
            path="/department"
            component={() => <Department department={this.props.department} />}
          />
          <Route
            path="/salary"
            component={() => <SalaryTable staffList={this.props.staffs} />}
          />
          <Redirect to="/staff" />
        </Switch>
        <Footer />
      </div>
      
    );
  }
}
export default withRouter(connect(mapStateToProps)(Main));