import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div>
            <h1 className='tracking-in-expand'>EXPRESSIONS</h1>
            <nav>
                <Link className='start' to="/all">START !</Link>
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

      <Link to="/category">cat</Link>

 * **/