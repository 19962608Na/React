import React, { Component } from 'react';
import Home from './HomeComponent';
import StaffList from './StaffListComponent';
import Department from './DepartmentComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {DEPARTMENTS, ROLE, STAFFS} from '../shared/staffs';
import {Switch, Route, Redirect} from 'react-router-dom';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS,
      role: ROLE      
    }
  }
  render() {
    const HomePage = () => {
      return(
          <Home />
      );
    }
    return (
      <div className="App">
        <Header />
        
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/stafflist' component={() => <StaffList staffs={this.state.staffs} />} />
              <Route path='/department' component={() => <Department departments={this.state.departments} />} />
              <Redirect to="/home" />
          
        </Switch>
        
        <Footer />
      </div>
    );
  }
}

export default Main;
