import React, { Component } from 'react'; 
import { Input } from 'reactstrap';
import './textarea.css';

class TextArea extends Component {
  constructor(props) {
    super(props);      
    this.handleChange = this.handleChange.bind(this);
    this.state = {
       changed : "",
       color: "black",
    };
  } 


  handleChange(event) {
    var inputText = event.target.value;
    this.setState({
      changed : inputText,
      color: "blue",
    });   
  }

  render() {           

    return (
      <div>
        <br />
        <Input type="text" className="inputText" onChange={this.handleChange} />
        <div>
          <br />
          <p id="TextArea" text="" style={{ color: this.state.color }}> { this.state.changed } </p>
        </div>
      </div>  
    );
  }
}
  
export default TextArea;