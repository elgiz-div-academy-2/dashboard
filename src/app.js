const express = require("express");
const cors = require("cors");
const config = require("./config");
const router = require("./routes");
const path = require("path");
const errorMiddleware = require("./middlewares/error.middeware");
require("./config/database");

const app = express();

app.use(cors());

app.use(express.json());

const publicPath = path.join(__dirname, "../public");
const uploadsPath = path.join(__dirname, "../uploads");
app.use(express.static(publicPath));
app.use("/uploads", express.static(uploadsPath));

app.get("/", (req, res) => res.json({ message: "Hello world" }));

app.use("/api", router);

app.use(errorMiddleware);

app.listen(config.port, () =>
  console.log(`application is running on http://localhost:${config.port}`)
);
