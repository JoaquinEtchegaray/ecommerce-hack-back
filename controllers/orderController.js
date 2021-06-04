const { Product } = require("../models/index");

module.exports = {
  create: async function (req, res) {
    try {
      let {
        name,
        description,
        image,
        price,
        categoryId,
        stock,
        isFeatured,
        isActive,
      } = req.body;
      const product = await Product.create({
        name,
        description,
        image,
        price,
        categoryId,
        stock,
        isFeatured,
        isActive,
        slug: slugify(name.toLowerCase()),
      });
      res.json(product);
    } catch (err) {
      res.status(400).json({
        err,
      });
    }
  },
};
