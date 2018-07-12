import React from 'react';

const cardfront = (props) => {
    return(
        <div className="face front" id={'card' + props.id}>
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
        </div>
    )
} 

export default cardfront;