import React , { Component } from 'react';

class MyFlipcard extends Component {
  constructor(props) {
    super(props);    
    this.state = { isFlipped: false };    
  }

  render() {
    return (
        <div className="card flipcard text-white bgimg3">
            <div className="face front">
                <div className="card-header text-center mytext1">
                    <h3>Touch Me</h3>
                </div>
                <img className="card-img-top img-rounded img-nofade" width="240" height="180" src="{{row.image1}}" alt="Front card pic" />
                <div className="card-body">
                    <h5 className="card-title mytext1">{this.props.trademark}</h5>
                    <p className="card-text mytext1">{this.props.model}</p>
                    <p className="card-text mytext1">{this.props.year}</p>
                    <p className="card-text text-success">{this.props.title}</p>
                </div>
                <div className="card-body">
                    <a className="btn btn-3 text-dark">
                        <img className="rounded blurbox" src="/static/icons/styleicons/logo/logo2.png" width="160" height="100" alt="" />>
                    </a>
                </div>                                
            </div>
            <div className="face back" >
                <h3 className="text-center mytext1">Back side</h3>
                <div className="form-group row">
                    <div className="col d-inline-flex">
                        <a className="btn mybtn btn-2" data-toggle="modal" data-target="#gallery{{row.image1}}">Photo gallery</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col">            
                        <div className="form-group row">
                            <div className="col d-inline-flex">
                                <a className="thumbnail" data-toggle="modal" id="backimg1" data-title="picture1" data-target="#">
                                    <img className="img-responsive" width="350" height="240" src="{{row.image1}}" alt="back side pic 1" />
                                </a>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col d-inline-flex">
                                <a className="thumbnail" data-toggle="modal" id="backimg1" data-title="picture2" data-target="#">
                                    <img className="img-responsive" width="350" height="240" src="{{row.image2}}" alt="back side pic 2" />
                                </a>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col d-inline-flex">
                                <a className="thumbnail" data-toggle="modal" id="backimg1" data-title="picture3" data-target="#">
                                    <img className="img-responsive" width="350" height="240" src="{{row.image3}}" alt="back side pic 3" />
                                </a>
                            </div>
                        </div>
                    </div>        
                    <div className="col">
                        <table className="table table-hover table-dark blurbox">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th colSpan="2">Parameters</th>
                                    <th scope="col">Values</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-success">
                                    <th scope="row">1</th>
                                    <td colSpan="2">Mark:</td>
                                    <td>{this.props.trademark}</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td colSpan="2">Engine type:</td>
                                    <td>{this.props.engine}</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colSpan="2">Manufactured year:</td>
                                    <td>{this.props.year}</td>
                                </tr>                    
                            </tbody>
                        </table>
                    </div>
                </div>                
            </div>            
      </div>
    );
  }
};

export default MyFlipcard;