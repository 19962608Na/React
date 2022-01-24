import React, { Component } from 'react';
import Home from './HomeComponent';
import StaffList from './StaffListComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {STAFFS} from '../shared/staffs';
import {Switch, Route, Redirect} from 'react-router-dom';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS      
    }
  }
  render() {
    const HomePage = () => {
      return(
          <Home 
          />
      );
    }
    return (
      <div className="App">
        <Header />
        
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/stafflist' component={() => <StaffList staffs={this.state.staffs} />} />
              <Redirect to="/home" />
          
        </Switch>
        
        {/* <StaffList staffs={this.state.staffs}/> */}
        
        <Footer />
      </div>
    );
  }
}

export default Main;
