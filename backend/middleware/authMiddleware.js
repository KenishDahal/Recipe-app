// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  console.log('Token received:', token); // Log the token received

  if (!token) return res.status(401).send('Access Denied');

  try {
    const verified = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET); // Extract the token after 'Bearer'
    req.user = verified;
    console.log('User verified:', req.user); // Log the verified user information
    next();
  } catch (err) {
    console.error('Token verification error:', err); // Log error if token verification fails
    res.status(400).send('Invalid Token');
  }
};

module.exports = authMiddleware;
