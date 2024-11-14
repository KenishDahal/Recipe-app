import React, { useEffect, useState } from "react";
import API from "../api";
import HeroSection from "../components/HeroSection";
import RecipeList from "../components/RecipeList";

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <RecipeList/>
    </div>
  );
};

export default Home;
