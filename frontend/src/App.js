import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Recipes from "./components/Recipes";
import Favorites from "./components/Favorites";
import { Link } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/addrecipes"
            element={isAuthenticated ? <Recipes /> : <Link to="/login" />}
          />
          <Route
            path="/"
            element={isAuthenticated ? <Recipes /> : <Link to="/login" />}
          />
           <Route
            path="/recipe/:id"
            element={isAuthenticated ? <Recipes /> : <Link to="/login" />}
          />
          <Route
            path="/favorites"
            element={isAuthenticated ? <Favorites /> : <Link to="/login" />}
          />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
