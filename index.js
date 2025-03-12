// Arbin Shrestha
// c0932096

// Importing required libraries
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const userRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');

// for .env file
require('dotenv').config();

// connecting to the mongodb using env uri
// useNewUrlParser: avoids old url parsing warnings
// useUnifiedTopology: uses new engine for mongodb
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


const app = express();

// Using pug as view engine
app.set('view engine', 'pug');

// For static files and images
app.use(express.static('public'));

// bodyParser middleware: makes form data accessible via req.body to parse forms
app.use(bodyParser.urlencoded({ extended: true }));

// allows PUT, PATCH and DELETE 
app.use(methodOverride('_method'));
app.use('/', userRoutes);

// App listening on port 3000
app.listen(3000, () => console.log("Server started on http://localhost:3000"));
