//Getting the required express extension for API 
const express = require('express');
//Module for creating routers 
const router = express.Router();
//Import ToDo model in controller 
const Todo = require('../model/todo');

router.get('/todos', (req, res, next) => {
  // To get current ToDoS from DB 
  Todo.find({}, 'action')
    .then((data) => res.json(data))
    .catch(next);
});

router.post('/todos', (req, res, next) => {
  // To add new todo 
   if (req.body.action) {
    Todo.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

router.delete('/todos/:id', (req, res, next) => {
  // delete a particular ToDo 
  Todo.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

//Defining the exports on router 
module.exports = router;