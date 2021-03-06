import React from 'react';

const cardback = (props) => {
    return(
        <div className="face back" >
            <div className="container text-center mytext1">            
                <h3> Back side </h3>
                <h4> Slot# {props.id} </h4>
            </div>            
            <div className="form-group row">
                <div className="col d-inline-flex">
                    <a className="btn mybtn btn-2" data-toggle="modal" data-target={"#gallery" + props.id}>Photo gallery</a>
                </div>
                <div className="col d-inline-flex">
                    <a className="btn mybtn btn-2" data-toggle="modal" data-target={"#vgallery" + props.id}>Video</a>
                </div>
            </div>
            <div className="row">                                        
                <div className="col">
                    <table className="table table-hover table-dark blurbox" stytle={{width: '100%' }}>
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
                                <td>{props.trademark}</td>
                            </tr>                            
                            <tr>
                                <th scope="row">2</th>
                                <td colSpan="2">Engine type:</td>
                                <td>{props.engine}</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colSpan="2">Manufactured year:</td>
                                <td>{props.year}</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td colSpan="2">Mileage:</td>
                                <td>{props.mileage}</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td colSpan="2">Color:</td>
                                <td>{props.color}</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td colSpan="2">Vehicle:</td>
                                <td>{props.engine}</td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td colSpan="2">Size:</td>
                                <td>{props.size}</td>
                            </tr>
                            <tr>
                                <th scope="row">8</th>
                                <td colSpan="2">Doors:</td>
                                <td>{props.doors}</td>
                            </tr>
                            <tr>
                                <th scope="row">9</th>
                                <td colSpan="2">Seats:</td>
                                <td>{props.seats}</td>
                            </tr>
                            <tr>
                                <th scope="row">10</th>
                                <td colSpan="2">Interior:</td>
                                <td>{props.interior}</td>
                            </tr>
                            <tr className="bg-success">
                                <th scope="row">11</th>
                                <td colSpan="2">Advances:</td>
                                <td>{props.advances}</td>
                            </tr>
                            <tr className="bg-danger">
                                <th scope="row">12</th>
                                <td colSpan="2">Defects:</td>
                                <td>{props.defects}</td>
                            </tr>
                            <tr className="bg-dark">
                                <th scope="row">13</th>
                                <td colSpan="2">Location:</td>
                                <td>{props.location}</td>
                            </tr>                    
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
} 

export default cardback;