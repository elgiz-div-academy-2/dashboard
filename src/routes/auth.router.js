const { Router } = require("express");
const authController = require("../controllers/auth.controller");
const userValidation = require("../validations/user.validation");
const {
  validationMiddleware,
} = require("../middlewares/validation.middleware");

const authRouter = Router();

authRouter.post(
  "/login",
  validationMiddleware(userValidation.login),
  authController.logIn
);
authRouter.post(
  "/register",
  validationMiddleware(userValidation.register),

  authController.register
);

module.exports = authRouter;
