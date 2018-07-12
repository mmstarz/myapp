import React from 'react';

const aEmail = 'test@test.com';
const aPassword = 'test';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailValidation: 'is-invalid',
            passwordValidation: 'is-invalid',
            logged: false,          
        };  
      
        this.handleSubmit = this.handleSubmit.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    }

    emailChange = (event) => {
        this.setState({ email: event.target.value }, () => {            
            if(this.state.email === aEmail) {
                this.setState({emailValidation: 'is-valid'})                        
            }  
        });
    }

    passwordChange = (event) => {              
        this.setState({ password: event.target.value }, () => {            
            if(this.state.password === aPassword) {
                this.setState({passwordValidation: 'is-valid'})                
            }
        });
    }
  
    handleSubmit = (event) => {        
        if(this.state.emailValidation === 'is-valid' && this.state.passwordValidation === 'is-valid') {
            this.setState({ logged: true }, () => {
                alert('login: success' );                
                this.setState({logged: true});
                console.log(this.state.logged);
            });                        
        }        
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
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group row">                                
                                    <div className="col-10">
                                        <input type="email" value={this.state.email} onChange={this.emailChange} className={"form-control " + this.state.emailValidation} name="email" placeholder="email" />
                                    </div>
                                </div>
                                <div className="form-group row">                                
                                    <div className="col-10">
                                        <input type="password" value={this.state.password} onChange={this.passwordChange} className={"form-control " + this.state.passwordValidation} name="password" placeholder="password" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-2">
                                        <button type="submit" className="btn btn-primary">Login</button>
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