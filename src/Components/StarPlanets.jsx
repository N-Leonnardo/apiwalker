import React from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios'
import { useState, useEffect } from 'react';


const StarPlanets = (props) => {
    const [err, setErr] = useParams("");
    const [planet, setPlanet] = useState(null)
    const {id} = useParams();


    useEffect(() =>{
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(response=>{
            console.log("hello")
            console.log(response.data)
            setPlanet(response.data)
        })

    },[])


    return (
        <div>
            <h1>{planet.id}</h1>
        </div>
    );
}
export default StarPlanets;