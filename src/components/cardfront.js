import React from 'react';
import logo2 from '../icons/logo2.png';

const cardfront = (props) => {
    return(
        <div className="face front">
            <div className="card-header text-center mytext1">            
                <h3>Touch Me</h3>
                <h4>slot# {props.id}</h4>
            </div>
            <img className="card-img-top img-rounded img-nofade" style={{ width: '100%', height: '60%', }} src={props.src} alt="Front card pic" />
            <div className="card-body">
                <h5 className="card-title mytext1">{props.trademark}</h5>
                <p className="card-text mytext1">{props.model}</p>
                <p className="card-text mytext1">{props.year}</p>
                <p className="card-text text-success">{props.title}</p>
            </div>
            <div className="card-body">
                <a className="btn btn-3 text-dark" style={{ width: '80%', height: '30%' }}>
                    <img className="rounded blurbox" src={logo2} style={{ width: '100%', height: '100%' }} alt="logo" />
                </a>
            </div>
        </div>
    )
} 

export default cardfront;