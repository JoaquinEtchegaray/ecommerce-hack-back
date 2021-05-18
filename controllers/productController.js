const { Product } = require("../models/index");
// const path = require("path");
// const fs = require("fs");
// const slugify = require("slugify");

module.exports = {
  showHome: async function (req, res) {
    let important = req.params.important;
    const products = await Product.findAll({
      limit: 10,
      order: [["createdAt", "DESC"]],
      where: { important: important },
    });
    res.json({ products });
  },

  showSingleProduct: async function (req, res) {
    try {
      let slug = req.params.slug;
      const product = await Product.findAll({
        where: { slug: slug },
      });

      res.json({ product });
    } catch (error) {
      let error = err.message;
      res.status(400).json({
        error,
      });
    }
  },
};
