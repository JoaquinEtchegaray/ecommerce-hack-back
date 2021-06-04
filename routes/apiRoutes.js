const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");
const loginController = require("../controllers/loginController");
const productController = require("../controllers/productController");
const categoryController = require("../controllers/categoryController");
const userController = require("../controllers/userController");
const orderController = require("../controllers/orderController");
const checkAdmin = require("../middlewares/checkAdmin");
const checkToken = require("express-jwt");

router.post("/tokens", loginController.login);
router.post("/users", registerController.store);

router.get("/products", productController.index);
router.get("/products/:slug", productController.showSingleProductSlug);
router.get("/products/:id", productController.showSingleProductId);
router.get(
  "/products/category/:categoryId",
  productController.indexByCategoryId
);

router.use(
  checkToken({ secret: process.env.SECRET_TEXT, algorithms: ["HS256"] })
);

router.get("/category", checkAdmin, categoryController.showCategories);
router.get("/users", checkAdmin, userController.index);
router.get("/users/:id", userController.show);
router.get("/admin/products", checkAdmin, productController.indexAdminHome);
router.get("/orders", checkAdmin, orderController.index);

router.post("/category", checkAdmin, categoryController.createCategory);
router.post("/products", checkAdmin, productController.create);
router.post("/orders", orderController.createOrder);

router.patch("/products/:id", checkAdmin, productController.update);
router.patch("/usersAdmin/:id", checkAdmin, userController.updateUserAdmin);
router.patch("/category/:id", checkAdmin, categoryController.updateCategory);
router.patch("/users/:id", checkAdmin, userController.update);

module.exports = router;
