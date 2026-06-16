const express = require("express");
const { register, login, me } = require("../controllers/auth.controller");
const router = express.Router();
const validate = require("../middlewares/validate.middleware");
const authMiddleware = require("../middlewares/auth.middleware");

const {
  registerSchema,
  loginSchema,
} = require("../validations/auth.validation");

router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);
router.get("/me", authMiddleware, me);
module.exports = router;
