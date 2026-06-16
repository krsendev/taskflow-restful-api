const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const validate = require("../middlewares/validate.middleware");
const {
  createTaskSchema,
  updateTaskSchema,
} = require("../validations/task.validation");
const {
  create,
  getAll,
  getOne,
  update,
  remove,
} = require("../controllers/task.controller");

router.post("/", authMiddleware, validate(createTaskSchema), create);
router.get("/", authMiddleware, getAll);
router.get("/:id", authMiddleware, getOne);
router.patch("/:id", authMiddleware, validate(updateTaskSchema), update);
router.delete("/:id", authMiddleware, remove);

module.exports = router;
