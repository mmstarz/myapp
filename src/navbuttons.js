import React from 'react';
import './navbuttons.css';
import MyModal from './modal';

class NavButtons extends React.Component {    
  render() {
    return ( 
      <div className="container-header">
        <MyModal className="mybtn btn-1" text="something" buttonLabel="About" /> 
        <MyModal className="mybtn btn-2" text="anything" buttonLabel="Contacts"/> 
        <MyModal className="mybtn btn-3" text="nothing" buttonLabel="Update" /> 
      </div>
    );
  }
}

export default NavButtons;