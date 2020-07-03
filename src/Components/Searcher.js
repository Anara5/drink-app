  import React, { useState } from "react";
  import Card from "../Components/Card";
  import data from "../Data/drinks.json";
  import { Link } from 'react-router-dom';


  const Searcher = () => {
    const [searchItem, setSearchItem] = useState("");

    const newData = data.cocktails.filter((cocktail) => cocktail.name.toLowerCase().indexOf(searchItem) >= 0);

    const clickFunction = (e) =>{
      e.preventDefault();
      return (
      true
    )
  }
    
    return (
      <div className="search">
          <form>
              <input type="text"
              id="input"
              onChange={(e) => setSearchItem(e.target.value.toLowerCase())}>
              </input>

              <button onClick={clickFunction}>Search</button>
          </form>

        <div className="container">

          {searchItem === "" || clickFunction === false ?
          (<p>please enter a drink name</p>) : (
          
          <div className="cards">
              {newData.length > 0 ? (
              newData.map((cocktail) => {
                return (

                  <Link to={`/preparation/${cocktail.name}`}>
                  <Card
                  key={cocktail.name}
                  name={cocktail.name}
                  src={cocktail.image}
                  />
                  </Link>
                  );
              })
          ) : (
            <p>The drink is not found / no result</p>
          )}
          
        </div>
          )}
        </div>     
      </div>
    )
  }

  export default Searcher;