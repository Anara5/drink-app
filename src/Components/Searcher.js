  import React, { useState } from "react";
  import Card from "../Components/Card";
  import data from "../Data/drinks.json";
  import { Link } from "react-router-dom";

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

          {searchItem === "" || clickFunction === false ?
          (<p>enter a drink name</p>) : (
          
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
    )
  }

  export default Searcher;

  /*
  const [item, setItem] = useState(data);
    //const [newData, setnewData] = useState(data.cocktails);

    

    const handleSubmit = (e) => {
      e.preventDefault();
      const found = item.cocktails.filter(
        (search) => search.name.toLowerCase() === searchItem.toLowerCase()
      );
      setnewData(found);
    };

    const handleChange = (e) => {
      setSearchItem(e.target.value);
    };

    return (
      <React.Fragment>
        <form onSubmit={handleSubmit}>
          <label htmlFor="search">
            <input type="text" onChange={handleChange} />
          </label>
          <input type="submit" value="search" />
        </form>
        <div>
          {newData.length > 0 ? (
            newData.map((cocktail) => (
              <Card
                key={cocktail.name}
                name={cocktail.name}
                src={cocktail.image}
              />
            ))
          ) : (
            <div>Not found </div>
          )}
        </div>
      </React.Fragment>
    );
  };
  */