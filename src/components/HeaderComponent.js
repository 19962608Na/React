import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }
  render() {
    return(
      <div>
      <Navbar dark expand="md">
          <div className="container">
              <NavbarToggler onClick={this.toggleNav} />
              <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="25" width="36" alt='Ristorante Con Fusion' /></NavbarBrand>
              <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav navbar>
                  <NavItem>
                      <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink className="nav-link" to='/stafflist'><span className="fa fa-users fa-lg"></span> Nhân Viên</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink className="nav-link"  to='/department'><span className="fa fa-id-card fa-lg"></span> Phòng Ban</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink className="nav-link" to='/salarytable'><span className="fa fa-info fa-lg"></span> Bảng Lương</NavLink>
                  </NavItem>
                  </Nav>
              </Collapse>
          </div>
      </Navbar>      
  </div>
    );
  }
}

export default Header;

