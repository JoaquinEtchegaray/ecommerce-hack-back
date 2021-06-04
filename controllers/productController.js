const { Product } = require("../models/index");
const slugify = require("slugify");
const formidable = require("formidable");
const path = require("path");
const fs = require("fs");
const s3 = require("../awsConfig");

module.exports = {
  index: async function (req, res) {
    const products = await Product.findAll({
      order: [["id", "ASC"]],
      where: { isFeatured: true },
    });
    res.json({ products });
  },

  indexAdminHome: async function (req, res) {
    const products = await Product.findAll({
      order: [["id", "ASC"]],
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

  indexByCategoryId: async function (req, res) {
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

  // create: async function (req, res) {
  //   try {
  //     let {
  //       name,
  //       description,
  //       image,
  //       price,
  //       categoryId,
  //       stock,
  //       isFeatured,
  //       isActive,
  //     } = req.body;
  //     const product = await Product.create({
  //       name,
  //       description,
  //       image,
  //       price,
  //       categoryId,
  //       stock,
  //       isFeatured,
  //       isActive,
  //       slug: slugify(name.toLowerCase()),
  //     });
  //     res.json(product);
  //   } catch (err) {
  //     res.status(400).json({
  //       err,
  //     });
  //   }
  // },

  // update: async function (req, res) {
  //   try {
  //     const id = req.params.id;
  //     const product = await Product.findByPk(id);
  //     console.log(product);
  //     await product.update({
  //       ...req.body,
  //       slug: slugify(req.body.name.toLowerCase()),
  //     });
  //     res.json({
  //       ok: true,
  //     });
  //   } catch (error) {
  //     res.status(500).json({
  //       error,
  //     });
  //   }
  // },

  update: async function (req, res) {
    const form = formidable({
      multiples: true,
      keepExtensions: true,
    });
    form.parse(req, async (err, fields, files) => {
      if (err) console.log(err);
      const ext = path.extname(files.image.path);
      const newFileName = `image_${Date.now()}${ext}`;

      const params = {
        ACL: "public-read",
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: `ecommerce/${newFileName}`,
        ContentType: files.image.type,
        Body: fs.createReadStream(files.image.path),
      };
      const data = await s3.upload(params).promise();
      console.log(data.Location);
      const {
        name,
        description,
        price,
        categoryId,
        stock,
        isFeatured,
        isActive,
      } = fields;
      await Product.update(
        {
          name,
          description,
          image: data.Location,
          price,
          categoryId,
          stock,
          isFeatured,
          isActive,
        },
        { where: { id: req.params.id } }
      );
      res.json({
        ok: true,
      });
    });
  },

  create: async function (req, res) {
    const form = formidable({
      multiples: true,
      keepExtensions: true,
    });
    form.parse(req, async (err, fields, files) => {
      if (err) console.log(err);
      const ext = path.extname(files.image.path);
      const newFileName = `image_${Date.now()}${ext}`;

      const params = {
        ACL: "public-read",
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: `ecommerce/${newFileName}`,
        ContentType: files.image.type,
        Body: fs.createReadStream(files.image.path),
      };
      const data = await s3.upload(params).promise();
      console.log(data.Location);
      const {
        name,
        description,
        price,
        categoryId,
        stock,
        isFeatured,
        isActive,
      } = fields;
      await Product.create({
        name,
        description,
        image: data.Location,
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
    });
  },
};
