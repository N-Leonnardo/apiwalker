import React from 'react';
import { useParams } from "react-router";
    
const Location = (props) => {
const { city } = useParams();
const { coloritem } = useParams();
const { backcolor } = useParams();



if(!isNaN(+ city)){
    return (

        <h1 style={{color: coloritem, backgroundColor: backcolor } }>
            The number is { city } !
            </h1>
    );


}else{
    
    return (
        <h1>The word is { city }!</h1>
    );

}

    
}

export default Location;