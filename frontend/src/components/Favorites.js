import React, { useEffect, useState } from 'react';
import API from '../api';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const { data } = await API.get('/recipes/favorites');
        setFavorites(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFavorites();
  }, []);

  return (
    <div>
      <h2>Favorite Recipes</h2>
      {favorites.map((recipe) => (
        <div key={recipe._id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.ingredients}</p>
          <p>{recipe.instructions}</p>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
