import React, { useEffect, useState } from "react";
import "../scss/RecipeList.scss";
import API from "../api";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { FcShop } from "react-icons/fc";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import Button from "./button";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const { data } = await API.get("/recipes");
        setRecipes(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipes();
  }, []);

  const handleAddToFavorites = async (recipeId) => {
    try {
      await API.post(`/recipes/favorite/${recipeId}`);
      alert("Recipe added to favorites");
    } catch (error) {
      console.error(error);
    }
  };

  // logic
  const [hide, setHide] = useState(true);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 1,
    },
  };
  const subVarent = {
    show: {
      scaleX: 1,
      scaleY: 1,
      transition: {
        ease: [0.1, 0.25, 0.3, 1],
        duration: 1,
      },
    },
    hide: {
      scaleX: 0.8,
      scaleY: 0.8,
      duration: 3,
      transition: {
        ease: [0.1, 0.25, 0.3, 1],
        duration: 1,
      },
    },
  };
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  const variants = {
    visible: { opacity: 1, y: 0 },
    /** Define the "hidden" state and its styles **/
    hidden: { opacity: 0, y: "-4rem" },
  };
  const parentVariants = {
    /** Define the "visible" state and its styles **/
    visible: { opacity: 1, y: 0 },
    /** Define the "hidden" state and its styles **/
    hidden: { opacity: 0, y: "-4rem" },
  };

  return (
    <div>
      <Carousel showDots={true} responsive={responsive}>
        {recipes.map((recipe) => (
          <motion.div
            variants={subVarent}
            animate={hide ? "hide" : "show"}
            className="card card--1"
            key={recipe._id}
          >
            <div className="h4">{recipe.title}</div>
            <Button text={"Get Yours"}/>
            {/* <div className="card__cashback body">
              <span>{recipe.ingredients}</span>
              {recipe.instructions}
              <span className="hero__secondPart__cashback__dollar">view more</span>
            </div> */}
            <button onClick={() => handleAddToFavorites(recipe._id)}>
              Add to Favorites
            </button>
          </motion.div>
        ))}
      </Carousel>
    </div>

  );
};

export default RecipeList;
