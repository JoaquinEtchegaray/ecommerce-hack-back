const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");
const loginController = require("../controllers/loginController");
const productController = require("../controllers/productController");
const checkToken = require("express-jwt");
const checkAuthor = require("../middlewares/checkAuthor");

// Login y token
router.post("/tokens", loginController.login);

// CRUD de usuarios
router.post("/users", registerController.store);
router.patch("/users/:id", registerController.update);
router.delete("/users/:id", registerController.destroy); //no se puede borrar si todavía no borraste la orden

// Mostrar productos en home y en página de producto
router.get("/products", productController.showHome);
router.get("/products/:slug", productController.showSingleProduct);
// CRUD de productos
router.post("/products", productController.store);
router.patch("/products/slug o id", checkAuthor, productController.update);
router.delete("/product", checkAuthor, productController.destroy); //no se puede borrar si todavía no borraste la orden, ya no borrar, sino que dejar inactivo

router.use(
  checkToken({ secret: process.env.SECRET_TEXT, algorithms: ["HS256"] })
);

module.exports = router;
