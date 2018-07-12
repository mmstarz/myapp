import React from 'react';
import './navbuttons.css';

class NavButtons extends React.Component {    
  render() {
    return ( 
      <div className="container-header">
        <a className="mybtn btn-2" data-toggle="modal" data-target="#aboutus">About us</a>
        <a className="mybtn btn-1" data-toggle="modal" data-target="#history">Updates</a>
        <a className="mybtn btn-3" data-toggle="modal" data-target="#contacts">Contacts</a>
      </div>
    );
  }
}

export default NavButtons;