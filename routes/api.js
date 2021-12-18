//Getting the required express extension for API 
const express = require('express');
//Module for creating routers 
const router = express.Router();

router.get('/todos', (req, res, next) => {
  // get placeholder
});

router.post('/todos', (req, res, next) => {
  // post placeholder
});

router.delete('/todos/:id', (req, res, next) => {
  // delete placeholder
});

//Defining the exports on router 
module.exports = router;