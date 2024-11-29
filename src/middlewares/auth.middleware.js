const userService = require("../services/user.service");
const { UnauthorizedError } = require("../utils/error.utils");
const { decodePayload } = require("../utils/jwt.utils");

const authMiddleware = async (req, res, next) => {
  const headers = req.headers;

  let token = headers.authorization;
  token = token?.split(" ")?.[1];

  if (!token) return next(new UnauthorizedError());

  let result = decodePayload(token);

  if (!result?.userId) return next(new UnauthorizedError());

  let user = await userService.findUser(result.userId);

  if (!user) return next(new UnauthorizedError());

  req.user = user;
  next();
};

module.exports = authMiddleware;
