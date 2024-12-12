import React from "react";
import { BrowserRouter as Router,Navigate, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Recipes from "./components/Recipes";
import Favorites from "./components/Favorites";
import { Link } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Form from "./pages/Form";

const App = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <div>
      <Router>
        {/* <Navbar/> */}
        <Routes>
        <Route path="/" element={<Form />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/addrecipes"
            element={isAuthenticated ? <Recipes /> : <Navigate to="/login" />}
          />
          <Route
            path="/home"
            element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
          />
           <Route
            path="/recipe/:id"
            element={isAuthenticated ? <Recipes /> :<Navigate to="/login" />}
          />
          <Route
            path="/favorites"
            element={isAuthenticated ? <Favorites /> :<Navigate to="/login" />}
          />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
