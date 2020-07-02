import React, { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar';
import data from '../Data/drinks.json';
import {Link} from 'react-router-dom';
import UserComment from '../Components/UserComment';

const Preparation = (props) => {

    const cocktailName = props.match.params.name;
    const cocktail = data.cocktails.filter((cocktail) => cocktail.name === cocktailName)[0];


    return (
        
        <div className="Page">
            <header className="Header">
                <NavBar />
            </header>


            <div className="drink">
            <p>Ordinary Drink</p>
            <h2>{cocktail.name}</h2>
            <p>{cocktail.preparation}</p>
            <img style={{height: 500, width: 500}} src={cocktail.image} alt="cocktail"/>
            </div>

            <UserComment />
            
        </div>
    )
}
export default Preparation;