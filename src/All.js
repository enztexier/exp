import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Data from "./Data.json";
import "./All.css";

const All = () => {

    const [exp, setExp] = useState(Data);
    const [indexArray, setIndexArray] = useState(0);
    const [history, setHistory] = useState([]);
    const [single, setSingle] = useState('');
    const [anim, setAnim] = useState(true)

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

        setAnim(true)

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

        setAnim(false)

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
            <h1>ALL</h1>

            {exp.length === history.length && indexArray > history.length ?
                <h1>FINITO</h1>
                :
                <div className = {anim ? 'animation-next' : 'animation-prev'}>
                    <div className='card'>
                        <div className='front'>
                            <div className='contents'>
                                <h2 className='title' key={single.id}>{single.expression}</h2>
                            </div>
                        </div>
                        <div className='back'>
                            <div className='contents'>
                                <h3 className='subtitle'>{single.signification}</h3>
                                <h4>{single.origine}</h4>

                            </div>
                        </div>
                    </div>
                </div>
            }




            <div>
                {indexArray > 1 && <button onClick={() => prevQuote()}>prev</button>}

                {exp.length === history.length && indexArray > history.length ? '' : <button onClick={() => nextQuote()}>next</button>}

            </div>
        </div>
    );
};

export default All;

/**
 * <h1 key={single.id}>{single.expression}</h1>
 <h1 key={single.id}>{single.signification}</h1>

**/