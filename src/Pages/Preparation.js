import React, {useEffect, useState} from 'react';
import NavBar from '../Components/NavBar';
import data from '../Data/drinks.json';
import {Link} from 'react-router-dom';


const Preparation = (props) => {

    const cocktailName = props.match.params.name;
    const cocktail = data.cocktails.filter((cocktail) => cocktail.name === cocktailName)[0];


    const onPreviousClick = (e) => {
        e.preventDefault();
        console.log(cocktailName[-1])
    }
    
    return (
        <div className="Page">
            <header className="Header">
                <NavBar />
            </header>

            <nav aria-label="Page navigation" className="container">
            <Link onClick={onPreviousClick}>Previous</Link>
            <Link>Next</Link>
            </nav>  

            <div className="drink">
            <p>Ordinary Drink</p>
            <h2>{cocktail.name}</h2>
            <p>{cocktail.preparation}</p>
            <img style={{height: 500, width: 500}} src={cocktail.image} alt="cocktail"/>
            </div>
        </div>
    )
}
export default Preparation;