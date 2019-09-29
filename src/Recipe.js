import React from 'react';
import style from './recipe.css';






const Recipe = ({title,calories,image,ingredients}) => {
  return (
    <div className="flexContainer"><div className="recipe" >
      <h1 >{title}</h1>
      <ol>
        {ingredients.map(ingredient =>
        <li>{ingredient.text}</li>)}
      </ol>
      <p>{calories}</p>
      <img src={image} alt=""/>
    </div></div>
  );
}


export default Recipe;
