import React from 'react';
import { useParams } from 'react-router-dom';
import Data from "./Data.json";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Selection = () => {

    const params = useParams();

    const exp = Data.filter(val => val.categorie === params.id);

    const [indexArray, setIndexArray] = useState(0);
    const [history, setHistory] = useState([]);
    const [single, setSingle] = useState('');

    let indexRandom = 0;

    let randomNumber = (max) => {
        return Math.floor(Math.random() * max);
    }

    useEffect(() => {
        indexRandom = randomNumber(exp.length);
        history.push(exp[indexRandom]);
        setIndexArray(indexArray + 1);
        setSingle(history[0]);
    }, []);

    function nextQuote() {

        if (exp.length === history.length && exp.length === (indexArray)) {
            setIndexArray(indexArray + 1);
        }

        else if (history.length === (indexArray)) {

            indexRandom = randomNumber(exp.length);

            do {
                indexRandom = randomNumber(exp.length);
            }
            while (history.includes(exp[indexRandom]))

            history.push(exp[indexRandom]);
            setIndexArray(indexArray + 1);
            setSingle(history[indexArray]);
        }

        else if (indexArray < exp.length) {
            setIndexArray(indexArray + 1);
            setSingle(history[indexArray]);
        }
    }

    let prevQuote = () => {

        if (indexArray > 1) {
            setSingle(history[indexArray - 2]);
            setIndexArray(indexArray - 1);
        }

        else if (indexArray === 1) {
            console.log("Start of the List");
        }
    }

    return (
        <div>
            <Link to="/">HOME</Link>
            <h1>Selection</h1>

            {exp.length === history.length && indexArray > history.length ?
                <h1>FINITO</h1>
                :
                <div>
                    <h1 key={single.id}>{single.expression}</h1>
                    <h2>{single.signification}</h2>
                    <br></br>
                    <h2>{single.origine}</h2>
                </div>
            }

            <div>
                {indexArray > 1 && <button onClick={() => prevQuote()}>prev</button>}

                {exp.length === history.length && indexArray > history.length ? '' : <button onClick={() => nextQuote()}>next</button>}

            </div>

        </div>
    );
};

export default Selection;