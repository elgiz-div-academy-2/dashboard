const userModel = require("../models/user.model");
const { encodePayload } = require("../utils/jwt.utils");
const bcrypt = require("bcrypt");

const register = async (params) => {
  let existsUser = await userModel.findOne({
    $or: [
      {
        username: params.username,
      },
      {
        email: params.email,
      },
    ],
  });

  if (existsUser) throw new Error("username or email is already exists");

  let user = new userModel(params);

  await user.save();

  return user;
};

const logIn = async (params) => {
  let user = await userModel.findOne({
    username: params.username,
  });

  if (!user) throw new Error("Username or password is not valid");

  let checkPassword = await bcrypt.compare(params.password, user.password);
  if (!checkPassword) {
    throw new Error("Username or password is not valid");
  }

  let token = encodePayload({ userId: user._id });

  return { token, user };
};

const authService = {
  register,
  logIn,
};

module.exports = authService;
