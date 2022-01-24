import React from 'react';

const DisplayPlanet = (props) => {
    const {planet} = props


    return (
    <div>
        <ul>
        {planet.results.map((plan, i) =>
            <li key={i}> {plan.name} </li>)}

        </ul>

    </div>);
};

export default DisplayPlanet;