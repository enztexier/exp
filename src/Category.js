import React from 'react';
import { Link } from 'react-router-dom';
import Data from "./Data.json";

const Category = () => {

    const primaryCategory = [...new Set(Data.map((Val) => Val.categorie))];
    const listItems = primaryCategory.map((number) =>
    <h2 key={number}><Link to={`/selection/${number}`}>{number}</Link></h2>
    );

    return (
        <div>
            <Link to="/">HOME</Link>
            <h1>CAT CAT</h1>
            {listItems}

        </div>
    );
};

export default Category;


/****
 * 
            {primaryCategory.map((Val, id) => {
          return (
            <button className="menu_button"
              key={id}
            >
              {Val}
            </button>
          );
        })}


 */