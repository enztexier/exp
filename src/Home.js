import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>HOME</h1>
            <nav>
                <Link to="/category">cat</Link>
                <Link to="/all">START !</Link>
            </nav>
        </div>
    );
};

export default Home;

/** 
 
JSON STRUCTURE

    {
        "id": "",
        "expression": "",
        "signification": "",
        "origine":"",
        "categorie":""
    },


 * **/