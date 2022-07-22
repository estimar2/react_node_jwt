const express = require("express");
const routes = require("../routes");
const Post_Controller = require("../controller/Post_Controller");

const Post_Router = express.Router();

Post_Router.get((routes.getPost, Post_Controller.getPost));

module.exports = Post_Router;
