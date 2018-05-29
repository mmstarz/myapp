import React, { Component } from 'react';
import './navbar.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import MyButton from './mybutton';

class Mybar extends Component {
  render() {
    return (
        <div id="Mybar">
          <Navbar color="dark" dark expand="lg">
            <NavbarBrand href="/" className="mr-auto">companyName</NavbarBrand>          
            <MyButton />                                       
          </Navbar>
      </div>  
    );
  }
}
  
export default Mybar;