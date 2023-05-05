const Todo = require("../models/todo");

const createTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create({
      name: req.body.name,
      description: req.body.description,
      status: false,
    });
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createTodo, getTodos };
