import React, { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar';
import data from '../Data/drinks.json';
import {Link} from 'react-router-dom';
import UserComment from '../Components/UserComment';

const Preparation = (props) => {
    const totalDrink = data.cocktails.length;
    console.log(totalDrink)
    const cocktailName = props.match.params.name;
    const cocktailNow = data.cocktails.filter((cocktail) => cocktail.name === cocktailName)[0];    
    const [cocktail, setCocktail] = useState(cocktailNow);

    const idNow = data.cocktails.findIndex((cocktail) => cocktail.name === cocktailName);
    const [id, setId] = useState(idNow);

    const prevDrink = () => {
        const newId = id > 0? id-1: id;
        setId(newId);
        setCocktail(data.cocktails[newId]);
    }

    const nextDrink = () => {
        const newId = id < totalDrink-1 ? id + 1 : id;
        setId(newId);
        setCocktail(data.cocktails[newId]);
    }

    return (
        
        <div className="Page">
            <header className="Header">
                <NavBar />
            </header>

            <div className="nav">
                <button style={{ marginright: '200px', minWidth: '100px' }} onClick={prevDrink}>Previous</button>
                <button style={{ marginLeft: '100px', minWidth: '100px' }} onClick={nextDrink}>Next</button>
            </div>

            <div className="drink">
                <p>Ordinary Drink: {id}</p>
                <h2>{cocktail.name}</h2>
                <p>{cocktail.preparation}</p>
                <img style={{height: 500, width: 500}} src={cocktail.image} alt="cocktail"/>
            </div>

            <UserComment />
            
        </div>
    )
}
export default Preparation;
