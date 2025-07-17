const express = require("express");
const cors = require("cors");
const app = express();
const formRoutes = require("./routes/form.routes");

app.use(cors());
app.use(express.json());

app.use("/api", formRoutes);

module.exports = app;
