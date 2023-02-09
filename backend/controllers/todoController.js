const Todo = require("../models/todoModel");
const asyncHandler = require("express-async-handler");

// @DESC TO FETCH ALL USER TODOS
// @ROUTE GET /api/todo
// @ACCESS PRIVATE
const getTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.find();
  res.status(200).json(todo);
});

// @DESC TO CREATE TODOS
// @ROUTE POST /api/todo
// @ACCESS PRIVATE
const createTodo = asyncHandler(async (req, res) => {
  const { name, completed, important, date, category } = req.body;
  if (!name || name.length < 2) {
    res.status(400);
    throw new Error("Please enter name and the minumum characters should be 2");
  }
  const todo = await Todo.create({
    name,
    completed,
    important,
    date,
    category,
    user: req.user.id,
  });
  res.status(200).json(todo);
});

// @DESC TO UPDATE TODOS
// @ROUTE PUT /api/todo/:id
// @ACCESS PRIVATE
const updateTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(400);
    throw new Error("Todo not found");
  }
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedTodo);
});

// @DESC TO DELETE TODOS
// @ROUTE DELETE /api/todo/:id
// @ACCESS PRIVATE
const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(400);
    throw new Error("Todo not found");
  }
  todo.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = { getTodo, createTodo, updateTodo, deleteTodo };
