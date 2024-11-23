const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
    },

    lastName: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    height: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    birthDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

const userModel = model("User", userSchema);

module.exports = userModel;
