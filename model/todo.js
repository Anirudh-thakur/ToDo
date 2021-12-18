// Get mongoose module for DB 
const mongoose = require('mongoose');
// To define schema
const Schema = mongoose.Schema;

// Create schema for todo
const TodoSchema = new Schema({
  action: {
    type: String,
    required: [true, 'The todo text field is required'],
  },
});

// Create model for todo
const Todo = mongoose.model('todo', TodoSchema);
//To export a portion of the code when import function is evoked 
module.exports = Todo;