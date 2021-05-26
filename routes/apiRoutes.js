const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");
const loginController = require("../controllers/loginController");
const productController = require("../controllers/productController");
const categoryController = require("../controllers/categoryController");
const userController = require("../controllers/userController");
// const checkAuthor = require("../middlewares/checkAuthor");

router.post("/tokens", loginController.login);

router.post("/users", registerController.store);

router.get("/users", userController.showUsers);
router.patch("/users/:id", userController.updateUser);
router.patch("/usersAdmin/:id", userController.updateUserAdmin);
router.get("/users/:id", userController.showUser);
// router.patch("/users", userController.updateUsers);

// router.patch("/users/:id", registerController.update);

router.get("/products", productController.showHome);
router.get("/products/admin", productController.showAdminHome);

router.get("/products/:slug", productController.showSingleProductSlug);
router.get("/products/:id", productController.showSingleProductId);
router.get(
  "/products/category/:categoryId",
  productController.showByCategoryId
);

router.post("/products", productController.createProduct);
router.patch("/products/:id", productController.updateProduct); // el id habría que pasarlo por params o por el body?

router.get("/category", categoryController.showCategories);
router.post("/category", categoryController.createCategory);
router.patch("/category/:id", categoryController.updateCategory);

// router.use(
//   checkToken({ secret: process.env.SECRET_TEXT, algorithms: ["HS256"] })
// );

module.exports = router;
