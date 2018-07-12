import React, { Component } from 'react';
import logo from '../icons/logo2.png';
import loginIcon from '../icons/016-login.png';


class Mybar extends Component {
  render() {
    return (      
      <nav className="navbar bgimg3" id="topsector">         
        <a className="navbar-brand" >
          <img className="img-nofade" src={logo} width="70" height="50" alt="" />
        </a>              
        <h3 className="mytext1">
          <a className="navbar-brand" >L&K Trading </a>
        </h3>
        <form>
            <a className="btn btn-5 text-dark" role="button" data-toggle="modal" data-target="#login">
                <span>
                  <img className="img-noshadow" src={loginIcon} width="20" height="20" alt="login icon" />
                </span>
                Admin Tool
            </a>
        </form>
      </nav>        
    );
  }
}
  
export default Mybar;