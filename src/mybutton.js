import React, { Component } from 'react';
import './mybutton.css';
import { Button } from 'reactstrap';

class MyButton extends Component {
    constructor(props) {
    super(props);    
    this.state = { pressed: false };    
  } 

  

  handleOnClick() {
    // BEGIN (write your solution here)
      if (this.state.pressed === false) {
        this.setState({
          pressed : true
        });           
      } else {
        this.setState({
          pressed : false
        });        
      }     
    // END
  }

  render() {
    // BEGIN (write your solution here)
    const flag = this.state.pressed;
    var className = this.props.className;   
    if (flag === false) {
      className = 'btn-success mybtn';      
    } else {
      className = 'btn-info mybtn';      
    } 
    // END

    return (      
      <div>
        <Button type="submit" id="MyButton" className={className} 
          onClick={e => this.handleOnClick(e)} > ChangeAble </Button>        
      </div>    
    );
  }
}

export default MyButton;