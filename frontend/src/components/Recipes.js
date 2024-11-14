import React, { useState, useEffect } from "react";
import API from "../api";
import "../scss/Recipes.scss"

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    title: "",
    ingredients: "",
    instructions: "",
  });

  const handleChange = (e) =>
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });

const handleAddRecipe = async () => {
    try {
      const token = localStorage.getItem('token'); // Retrieve token from storage
      const response = await API.post('/recipes/add',newRecipe, {
        headers: {
          Authorization: `Bearer ${token}` // Include token in headers
        }
      });
    setRecipes([...recipes, response.data]);
    setNewRecipe({ title: "", ingredients: "", instructions: "" });
      console.log('Recipe added:', response.data);
    } catch (error) {
      console.error('Error adding recipe:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="recipes-container">
    <form className="add-recipe-form">
      <h2>Add Recipe</h2>
      <input
        type="text"
        name="title"
        placeholder="Recipe Title"
        value={newRecipe.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="ingredients"
        placeholder="Ingredients"
        value={newRecipe.ingredients}
        onChange={handleChange}
        required
      />
      <textarea
        name="instructions"
        placeholder="Instructions"
        value={newRecipe.instructions}
        onChange={handleChange}
        required
      />
      <button type="button" onClick={handleAddRecipe}>Add Recipe</button>
    </form>
  </div>
  );
};

export default Recipes;
