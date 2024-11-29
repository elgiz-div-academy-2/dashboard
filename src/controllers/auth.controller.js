const authService = require("../services/auth.service");

const register = async (req, res, next) => {
  const { body } = req;
  try {
    let result = await authService.register(body);

    res.json(result);
  } catch (err) {
    next(err);
  }
};

const logIn = async (req, res, next) => {
  try {
    res.json(await authService.logIn(req.body));
  } catch (err) {
    next(err);
  }
};

const authController = {
  logIn,
  register,
};

module.exports = authController;
