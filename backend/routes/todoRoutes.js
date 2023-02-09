const express = require("express");
const router = express.Router();
const {protect}=require("../middlewares/authMiddleware.js")
const { getTodo,createTodo,updateTodo,deleteTodo } = require("../controllers/todoController");

router.route("/").get(protect,getTodo).post(protect,createTodo)
router.route("/:id").put(protect,updateTodo).delete(protect,deleteTodo)
module.exports = router;
