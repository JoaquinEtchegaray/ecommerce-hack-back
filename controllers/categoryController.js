const { Category } = require("../models/index");

module.exports = {
  createCategory: async function (req, res) {
    try {
      let { name } = req.body;
      const category = await Category.create({
        name,
      });
      res.json({
        ok: true,
      });
    } catch (err) {
      res.status(400).json({
        err,
      });
    }
  },

  updateCategory: async function (req, res) {
    try {
      let id = req.params.id;
      let { name } = req.body;
      const product = await Category.findByPk(id);
      await product.update({
        name,
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
