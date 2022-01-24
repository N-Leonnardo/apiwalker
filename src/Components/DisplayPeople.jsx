import React from 'react';

const DisplayPeople = (props) => {
    const {people} = props


    return (
    <div>
        <ul>
        {people.results.map((plan, i) =>
            <li key={i}> {plan.name} </li>)}

        </ul>

    </div>);
};

export default DisplayPeople;