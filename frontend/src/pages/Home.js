import React, { useEffect, useState } from "react";
import API from "../api";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import RecipeList from "../components/RecipeList";

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <HeroSection />
      <RecipeList/>
    </div>
  );
};

export default Home;
