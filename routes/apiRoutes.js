const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");
const loginController = require("../controllers/loginController");
const productController = require("../controllers/productController");
const categoryController = require("../controllers/categoryController");
// const checkAuthor = require("../middlewares/checkAuthor");

router.post("/tokens", loginController.login);

router.post("/users", registerController.store);
// router.patch("/users/:id", registerController.update);

router.get("/products", productController.showHome);
router.get("/products/admin", productController.showAdminHome);

router.get("/products/:slug", productController.showSingleProductSlug);
router.get("/products/:id", productController.showSingleProductId);
router.get(
  "/products/category/:categoryId",
  productController.showByCategoryId
);

router.post("/products", productController.create);
router.patch("/products/:id", productController.update); // el id habría que pasarlo por params o por el body?

router.post("/category", categoryController.create);
router.patch("/category/:id", categoryController.update);

// router.use(
//   checkToken({ secret: process.env.SECRET_TEXT, algorithms: ["HS256"] })
// );

module.exports = router;
