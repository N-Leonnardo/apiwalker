import React from 'react';
import { useParams } from "react-router";
import axios from 'axios'
import DisplayPeople from './DisplayPeople';

const StarPeople = (props) => {
    const [err, setErr] = useParams("");
    const [people, setPeople] = useParams(null);

    const fetchPokemonAxios =() =>{
        axios.get('https://swapi.dev/api/people/'+{people})
        .then(response=>{
            setPeople(response.data)
        })
        
    }


    return (
        <div>
            <button onClick={fetchPokemonAxios}> Click here</button>
            {
                people?
                (<DisplayPeople people = {people} />):
                (<h3> Press the button to fetch it </h3>)
            }
            </div>
    );
}
export default StarPeople;