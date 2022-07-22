const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const postgres = require("./postgres");
const routes = require("./routes");

const Post_Router = require("./router/Post_Router");

require("dotenv").config();

const { NODE_PORT } = process.env;

const port = NODE_PORT || 5000;

//middleware
app.use(express.json());

app.use(cors());
app.options("*", cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES //
app.get(routes.getPost, Post_Router);

app.get("/", (req, res) => res.send("안녕하슈~"));

app.listen(port, () => console.log(`server start on ${port}✨`));
