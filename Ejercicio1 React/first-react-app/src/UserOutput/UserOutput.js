import React from 'react';

const UserOutput = ( props ) => {
    return (
        <div className="UserOutput">
        
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p onClick={props.click}>Este es el segundo parrafo de {props.name}</p>
        </div>
    )
};

export default UserOutput;