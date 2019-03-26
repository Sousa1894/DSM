import React from 'react';
import CharComponent from '../CharComponent/CharComponent';



const ListCharComponents = ( props ) => {
    return (
        <div className="ListCharComponents">
           <CharComponent>{props.l}</CharComponent>
        </div>
    )
};

export default ListCharComponents;