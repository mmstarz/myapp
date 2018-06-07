import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({
            email: event.target.email,
            password: event.target.password
        });       
    }
    
    handleSubmit(event) {
        alert('An email was submitted: ' + this.state.email);
        event.preventDefault();
    }

    render() {
        return(
            <div className="modal fade" id="login" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-light mytext1" id="exampleModalCenterTitle">Login form</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form method="post" onSubmit={this.handleSubmit}>
                                <div className="form-group row">
                                    <label htmlFor="inputEmail3" className="col-2 col-form-label">Email</label>
                                    <div className="col-10">
                                        <input type="email" value={this.state.email} onChange={this.handleChange} className="form-control" name="email2" id="inputEmail3" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputPassword3" className="col-2 col-form-label">Password</label>
                                    <div className="col-10">
                                        <input type="password" value={this.state.password} onChange={this.handleChange} className="form-control" name="password2" id="inputPassword3" placeholder="Password" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-2">
                                        <button type="submit" name="loginbtn" className="btn btn-primary">Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>    
        )
    }
}

export default LoginForm;