const { Product } = require("../models/index");
// const path = require("path");
// const fs = require("fs");
const slugify = require("slugify");

module.exports = {
  showHome: async function (req, res) {
    const products = await Product.findAll({
      order: [["createdAt", "DESC"]],
      where: { isFeatured: true },
    });
    res.json({ products });
  },

  showAdminHome: async function (req, res) {
    const products = await Product.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.json({ products });
  },

  showSingleProductSlug: async function (req, res) {
    try {
      let slug = req.params.slug;
      const product = await Product.findOne({
        where: { slug: slug },
      });

      res.json({ product });
    } catch (error) {
      res.status(400).json({
        error,
      });
    }
  },

  showSingleProductId: async function (req, res) {
    try {
      let id = req.body.id;
      const product = await Product.findOne({
        where: { id: id },
      });

      res.json({ product });
    } catch (error) {
      res.status(400).json({
        error,
      });
    }
  },

  showByCategoryId: async function (req, res) {
    try {
      let categoryId = req.params.categoryId;
      const products = await Product.findAll({
        where: { categoryId: categoryId },
      });
      console.log({ products });
      res.json({ products });
    } catch (error) {
      res.status(400).json({
        error,
      });
    }
  },

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

  update: async function (req, res) {
    try {
      let id = req.params.id;
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
      const product = await Product.findByPk(id);
      await product.update({
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
      res.json({
        ok: true,
      });
    } catch (error) {
      res.status(404).json({
        error,
      });
    }
  },
};
