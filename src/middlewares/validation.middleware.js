const { ValidationError } = require("../utils/error.utils");

const validationMiddleware = (schema) => {
  return (req, res, next) => {
    let result = schema.validate(req.body);
    if (result.error)
      return next(new ValidationError(result.error?.details?.[0]?.message));

    next();
  };
};

module.exports = {
  validationMiddleware,
};
