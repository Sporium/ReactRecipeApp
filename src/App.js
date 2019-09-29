import React,{useEffect, useState} from 'react';
import Recipe from './Recipe'
import './App.css';

const App = () => {

  const APP_ID = '9eed2b40';
  const APP_KEY ='cc29b5d0d71568b708f9e9c2b4af5e88';


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('');
//console.log("query",query);
//console.log("recipes",recipes);
  useEffect( () => {
    getRecipes();
},[query]);

  const getRecipes = async () => {
  const response = await fetch(
    `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data = await response.json();
 setRecipes(data.hits);
 console.log("data",data);
};

  const updateSearch = e => {
    setSearch(e.target.value);
    //console.log(e.target.value);
  };

  const getSearch = e=> {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
      <div className="App">
        <form onSubmit={getSearch} className="serch-form">
          <input type="text" className="search-bar" value={search}
            onChange={updateSearch}
            />
          <button type="submit" className="search-button">Search</button>
        </form>
        <div className="recipes">
        {recipes.map(recipe => (
        <a target="_blank" href={recipe.recipe.url}>  <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            />
          </a>
        ))}
        </div>
      </div>

  );
}

export default App;
