const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");
const loginController = require("../controllers/loginController");
const productController = require("../controllers/productController");
const categoryController = require("../controllers/categoryController");
const userController = require("../controllers/userController");
// const checkAuthor = require("../middlewares/checkAuthor");
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

router.get("/category", categoryController.showCategories);
router.get("/users", userController.index);
router.get("/users/:id", userController.show);
router.get("/products/admin", productController.indexAdminHome);

router.post("/category", categoryController.createCategory);
router.post("/products", productController.create);

router.patch("/products/:id", productController.update);
router.patch("/usersAdmin/:id", userController.updateUserAdmin);
router.patch("/category/:id", categoryController.updateCategory);
router.patch("/users/:id", userController.update);

module.exports = router;
