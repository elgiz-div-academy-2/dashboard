const authService = require("../services/auth.service");

const register = async (req, res) => {
  const { body } = req;
  try {
    let result = await authService.register(body);

    if (!result) {
      return res.status(400).json({ error: "something went wrong" });
    }

    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const logIn = async (req, res) => {
  try {
    res.json(await authService.logIn(req.body));
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const authController = {
  logIn,
  register,
};

module.exports = authController;
