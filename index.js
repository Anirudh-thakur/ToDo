//specifying requirements 
const express = require('express');
// Used for connecting to DB 
const mongoose = require('mongoose');

// A middleware to check requests before parsing them
const bodyParser = require('body-parser');

// Used for importing routes
const routes = require('./routes/api');

// For using env variables 
require('dotenv').config()


//Connect to DB 
mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));

// Since mongoose's Promise is deprecated, we override it with Node's Promise
mongoose.Promise = global.Promise;


//Creating express app
const app = express();

// Creating port variables 
const port = process.env.PORT || 5000;


//Helps to fix the CORS issue 
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());

app.use('/api', routes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});