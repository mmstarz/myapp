import React from 'react';
import './card.css';

let carditem = [
    {
        id: '1',
        trademark: 'bmw',
        model: 'i8',
        year: '2014',
        title: 'first title',
        mileage: '20.000',
        color: 'silver/blue',
        engine: 'gas',
        size: 'coupe',
        doors: '3',
        seats: '4',
        interior: 'leather',
        advances: 'full compl',
        defects: 'no defects',              
    },
]

const MyCard = (props) => {
  return (
    <div>
        <div className="card flipcard text-white bgimg3" id={carditem[0].id} width='26.5%' >
            <div className="face front">
                <div className="card-header text-center mytext1">
                    <h3>Touch Me</h3>
                </div>
                <img className="card-img-top img-rounded img-nofade" width="240" height="180" src="/" alt="frons side img" />
                <div className="card-body">
                    <h5 className="card-title mytext1">{carditem[0].trademark}</h5>
                    <p className="card-text mytext1">{carditem[0].model}</p>
                    <p className="card-text mytext1">{carditem[0].year}</p>
                    <p className="card-text text-success">{carditem[0].title}</p>
                </div>
                <div className="card-body">
                    <a className="btn btn-3 text-dark">
                        <img className="rounded blurbox" src="/.logo.svg" width="160" height="100" alt="logo" />
                    </a>
                </div>
            </div>
            <div className="face back" width="220%" >
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
                                    <img className="img-responsive" width="350" height="240" src="/" alt="img1 backside"/>
                                </a>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col d-inline-flex">
                                <a className="thumbnail" data-toggle="modal" id="backimg1" data-title="picture2" data-target="#">
                                    <img className="img-responsive" width="350" height="240" src="/" alt="img2 backside"/>
                                </a>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col d-inline-flex">
                                <a className="thumbnail" data-toggle="modal" id="backimg1" data-title="picture3" data-target="#">
                                    <img className="img-responsive" width="350" height="240" src="/" alt='img3 backside' />
                                </a>
                            </div>
                        </div>
                    </div>
                    

                    
                    <div className="col">
                        <table className="table table-hover table-dark blurbox">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th colspan="2">Parameters</th>
                                    <th scope="col">Values</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-success">
                                    <th scope="row">1</th>
                                    <td colspan="2">Mark:</td>
                                    <td>{carditem[0].trademark}</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td colspan="2">Model:</td>
                                    <td>{carditem[0].model}</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Manufactured year:</td>
                                    <td>{carditem[0].year}</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td colspan="2">Mileage:</td>
                                    <td>{carditem[0].mileage}</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td colspan="2">Color:</td>
                                    <td>{carditem[0].color}</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td colspan="2">Vehicle:</td>
                                    <td>{carditem[0].engine}</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td colspan="2">Size:</td>
                                    <td>{carditem[0].size}</td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td colspan="2">Doors:</td>
                                    <td>{carditem[0].doors}</td>
                                </tr>
                                <tr>
                                    <th scope="row">9</th>
                                    <td colspan="2">Seats:</td>
                                    <td>{carditem[0].seats}</td>
                                </tr>
                                <tr>
                                    <th scope="row">10</th>
                                    <td colspan="2">Interior:</td>
                                    <td>{carditem[0].interior}</td>
                                </tr>
                                <tr className="bg-success">
                                    <th scope="row">11</th>
                                    <td colspan="2">Advances:</td>
                                    <td>{carditem[0].advances}</td>
                                </tr>
                                <tr className="bg-danger">
                                    <th scope="row">12</th>
                                    <td colspan="2">Defects:</td>
                                    <td>{carditem[0].defects}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  );
};

export default MyCard;