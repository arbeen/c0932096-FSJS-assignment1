const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Display all users
router.get('/', async (req, res) => {
  const users = await User.find();
  res.render('index', { users, activePage: "home" });
});

// Render Add User Form
router.get('/add', (req, res) => {
  res.render('add-user', {activePage: "add"});
});

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


// Render Edit Page
router.get('/edit/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render('edit-user', { user });
});

// Update User
router.post('/update/:id', async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/');
});

// Display User Details
router.get('/user/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.render('view-user', { user });
  } catch (err) {
    res.status(500).send('Error: ' + err);
  }
});


// Delete User
router.post('/delete/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

module.exports = router;
