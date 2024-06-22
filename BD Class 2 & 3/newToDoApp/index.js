// import express
const express = require("express");
const app = express();

// local config from dotenv
require('dotenv').config();

const PORT = process.env.PORT || 4000;

// middle ware to parse json request body -> parser for data
app.use(express.json());

// import route for TODO API
const todoRoutes = require("./routes/todos");

// mount the todo API routes
app.use("/api/v1", todoRoutes);

// start server
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
})

// connect to the database
const dbConnect = require("./config/database");
dbConnect();

// default route
app.get("/", (req, res) => {
    res.send("<h1>This is HOMEPAGE<h1>");
})