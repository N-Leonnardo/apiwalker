import React, { useState } from "react";
import { useHistory } from "react-router-dom";
    
const Survey = (props) => {
const [id, setId] = useState("");
const [option, setOption] = useState("");
const history = useHistory();
    
const sendSurvey = (e) => {
    e.preventDefault();
        history.push(`/${option}/${id}`);
}
    
return (
    <form onSubmit={ sendSurvey }>
    <label>id:</label>
    <input type="id" onChange={ (e) => setId(e.target.value) } value={ id } />

    <label>Your Option Name: </label>
        <input list="option" onChange={ (e) => setOption(e.target.value)  } value={ option }/>
        <datalist id="option">
            <option value="planet" />
            <option value="people" />

        </datalist>
    <input type="submit" value="Submit Survey" />
    </form>
);
}

export default Survey