const register = (req, res) => {
  res.json({
    message: "user registered successfully",
  });
};

const authController = {
  register,
};

module.exports = authController;
