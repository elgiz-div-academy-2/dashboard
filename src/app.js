const express = require("express");
const cors = require("cors");
const config = require("./config");
const router = require("./routes");
require("./config/database");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => res.json({ message: "Hello world" }));

app.use("/api", router);

app.listen(config.port, () =>
  console.log(`application is running on http://localhost:${config.port}`)
);
