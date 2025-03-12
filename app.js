const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const userRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


const app = express();
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use('/', userRoutes);

app.listen(3000, () => console.log("Server started on http://localhost:3000"));
