const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");
const loginController = require("../controllers/loginController");
const productController = require("../controllers/productController");
const checkToken = require("express-jwt");
const checkAuthor = require("../middlewares/checkAuthor");

router.post("/users", registerController.store);
router.post("/tokens", loginController.login);

router.get("/products", productController.showHome);

router.use(
  checkToken({ secret: process.env.SECRET_TEXT, algorithms: ["HS256"] })
);

module.exports = router;
