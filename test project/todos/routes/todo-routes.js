const express = require("express");
const { getTodo, postTodo } = require("../controllers/todoController");

const router = express.Router();

router.get("/", getTodo);
router.post("/", postTodo);
router.put("/:id", putTodo);
router.delete("/:id", deleteTodo);
