import React from 'react';



const ImputComponent = ( props ) => {
    return (
        <div className="ImputComponent">
            <input type="text" onChange={props.changed} value={props.name} />
            <p>{props.valor}</p>
        </div>
    )
};

export default ImputComponent;