import React from 'react';
import './RecipeItem.css';

const RecipeItem = ({ title, calories, image, ingredients, url }) => {
    return (
        <div className="recipe">
            <h2 className="recipe-title"> {title} </h2>
            <ul className="recipe-ul"><h5 className="ul-h5">Ingredients:</h5> 
                {ingredients.map(ingredient => (
                    <li> {ingredient.text} </li>
                ))} 
            </ul>
            <img className="recipe-image" src={image} alt=""></img>
            <a href={`${url}`} alt="recipe">
                <button className="recipe-btn btn btn-outline-dark">Detailed recipe</button>
            </a>          
        </div>
    );
};

export default RecipeItem;