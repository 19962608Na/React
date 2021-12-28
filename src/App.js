import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import StaffList from './components/StaffListComponent';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href='#'>Ứng dụng quản lí nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
