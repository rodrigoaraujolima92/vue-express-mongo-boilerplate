import { config } from "./../config";
import express from "express";
import mongoose from "mongoose";

/**
 * Import the controllers
 */
import * as feedController from "./controllers/feedController";

let router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// Set default API response
router.get("/", function(req, res) {
  res.json({
    status: "API Its Working",
    message: "Welcome to RESTHub crafted with love!"
  });
});

// Contact routes
router
  .route("/feeds")
  .get(feedController.index)
  .post(feedController.add);

// Connect to Mongoose and set connection variable
mongoose.connect(
  config.db.url,
  { useNewUrlParser: true }
);
// https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d
export { router };
