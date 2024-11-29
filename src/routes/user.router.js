const { Router } = require("express");
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const userRouter = Router();

userRouter.get("/me", authMiddleware, userController.myProfile);

module.exports = userRouter;
