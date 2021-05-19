const { Product } = require("../models/index");
// const path = require("path");
// const fs = require("fs");
const slugify = require("slugify");

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

  create: async function (req, res) {
    try {
      let { name, description, image, price, stock, categoryId, important } =
        req.body;
      const product = await Product.create({
        name,
        description,
        image,
        price,
        stock,
        categoryId,
        important,
        slug: slugify(name.toLowerCase()),
      });
      res.json({ product });
    } catch (err) {
      let error = err.message;
      res.status(400).json({
        error,
      });
    }
  },

  destroy: async function (req, res) {
    try {
      let { id } = req.body;
      await Product.destroy({ where: { id: id } });
      res.json({
        ok: true,
      });
    } catch (error) {
      let error = err.message;
      res.status(400).json({
        error,
      });
    }
  },

  update: async function (req, res) {
    try {
      let { id } = req.body;
      let { name, description, image, price, stock, categoryId, important } =
        req.body;
      const product = await Product.findByPk(id);
      await product.update({
        name,
        description,
        image,
        price,
        stock,
        categoryId,
        important,
      });
      res.json({
        ok: true,
      });
    } catch (error) {
      let error = err.message;
      res.status(404).json({
        error,
      });
    }
  },
};
