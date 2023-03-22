import React from 'react';
import { useParams } from 'react-router-dom';
import Data from "./Data.json";


const Selection = () => {

    const params = useParams();
    console.log(params);

    const c = "AA";
    console.log(c);

    const words = ['spray', 'AA', 'elite', 'exuberant', 'destruction', 'present'];

    const result = words.filter(word => word === "AA");

    //console.log(result);

    const people = [
        {
            name: 'James',
            age: 31,
        },
        {
            name: 'John',
            age: 45,
        },
        {
            name: 'AA',
            age: 65,
        },
        {
            name: 'Ringo',
            age: 49,
        },
        {
            name: 'AA',
            age: 34,
        }
    ];

    return (
        <div>
            <h1>Selection</h1>

            <div>
                {people.filter(person => person.name === c).map(filteredPerson => (
                    <li>
                        {filteredPerson.name}
                    </li>
                ))}
            </div>


        </div>
    );
};

export default Selection;