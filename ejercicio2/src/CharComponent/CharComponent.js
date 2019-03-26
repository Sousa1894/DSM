import React from 'react';



const CharComponent = ( props ) => {
    const style = {
        
        display: 'inline-block',
        padding: '16px',
        textalign: 'center', 
        margin: '16px', 
        border: '1px solid black'
        
      };
    return (
        <div className="CharComponent" style={style} onClick={props.click}>
              {props.letra}
        </div>
    )
};

export default CharComponent;