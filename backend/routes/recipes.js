const express = require('express');
const Recipe = require('../models/Recipe');
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find(); // Replace `Recipe` with your actual model
        res.json(recipes);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching recipes' });
      }
} )

// router.post('/add', authMiddleware, async (req, res) => {


router.post('/add', authMiddleware, async (req, res) => {
  try {
    const recipe = new Recipe({ ...req.body, createdBy: req.user._id });
    await recipe.save();
    res.status(201).send('Recipe added');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post('/favorite/:id', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    user.favoriteRecipes.push(req.params.id);
    await user.save();
    res.status(200).send('Recipe added to favorites');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get('/favorites', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate('favoriteRecipes');
    res.send(user.favoriteRecipes);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
