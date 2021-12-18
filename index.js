//specifying requirements 
const express = require('express');

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

app.use((req, res, next) => {
  res.send('Welcome to Express');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});