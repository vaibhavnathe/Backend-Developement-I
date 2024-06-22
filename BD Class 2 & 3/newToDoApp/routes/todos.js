// import express router
const express = require("express")
const router = express.Router();

// import controller
const {createTodo} = require("../controllers/createTodo")
const {getTodo, getTodoById} = require("../controllers/getTodo")
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");

// define API route & map it to controller (Routes)
router.post("/createTodo", createTodo);
router.get("/getTodos",getTodo);
router.get("/getTodos/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;