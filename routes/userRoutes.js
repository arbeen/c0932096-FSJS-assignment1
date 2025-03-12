// userRoutes.js: Contains all the routes for the application

const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET /: Display all users
router.get('/', async (req, res) => {
  const users = await User.find();
  // sending activePage parameter for dynamic active link on the navbar
  res.render('index', { users, activePage: "home" });
});

// GET /add
// Render Add User Form
router.get('/add', (req, res) => {
  res.render('add-user', {activePage: "add"});
});

// POST /add
// Handle User Creation
router.post('/add', async(req, res) => {
  const { firstName, lastName, dateOfBirth, address1, address2, city, postalCode, country, phoneNumber, email, notes } = req.body;

  const newUser = new User({
    firstName,
    lastName,
    dateOfBirth,
    address1,
    address2,
    city,
    postalCode,
    country,
    phoneNumber,
    email,
    notes
  });

  newUser.save()
    .then(() => res.redirect('/'))  // Redirect to home or another page after saving
    .catch(err => res.status(500).send(err));
});

// GET /edit/:id
// Render Edit Page
router.get('/edit/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render('edit-user', { user });
});

// POST /edit/:id
// Update User
router.post('/edit/:id', async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/');
});

// POST /delete/:id
// Delete User
router.post('/delete/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

module.exports = router;
