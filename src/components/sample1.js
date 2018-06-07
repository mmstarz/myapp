import React from 'react';

const sample1 = (props) => {
    return (
        <div>
            <h1> {props.name} sample # {props.number} and random value {Math.floor(Math.random() * 10)} </h1>
            <h2> {props.children} </h2>
        </div>
    )
};

export default sample1;