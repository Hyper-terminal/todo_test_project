const express = require("express");
const { getTodo, deleteTodo, updateTodo, createTodo } = require("../controllers/todoController");

const router = express.Router();

router.get("/", getTodo);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;