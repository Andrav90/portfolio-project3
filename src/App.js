import React, { useEffect, useState } from 'react';
import RecipeItem from './components/recipeItem/RecipeItem';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const App = () => {
    const APP_ID = '72492c7a'; 
    const APP_KEY = '806cd41467484b00669f5c2842cef03b';

    const [ recipes, setRecipes ] = useState([]);
    const [ search, setSearch ] = useState("");
    const [ query, setQuery ] = useState("");

    useEffect(() => {
        const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=30`);
        const data = await response.json();
        setRecipes(data.hits);
        };
        getRecipes();
    }, [ query ]);

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    return ( 
        <div className="App">
            <form onSubmit={ getSearch } className="search-form" >
                <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Search for an ingredient or a food"></input>
            </form>
            <div className="recipes">
                {recipes.map(recipe => (
                <RecipeItem 
                    title={recipe.recipe.label} 
                    calories={recipe.recipe.calories} 
                    image={recipe.recipe.image} 
                    ingredients={recipe.recipe.ingredients}
                    key={uuidv4()}
                    url={recipe.recipe.url}
                />
                ))}
            </div>
        </div>
    );
};

export default (App);