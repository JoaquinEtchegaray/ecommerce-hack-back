const { User } = require("../models/index");
const validator = require("email-validator");
// const formidable = require("formidable");

const hashPassword = require("../hashPassword/hashPassword");

module.exports = {
  index: async function (req, res) {
    const users = await User.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.json({ users });
  },

  show: async function (req, res) {
    try {
      let id = req.params.id;
      const user = await User.findOne({
        where: { id: id },
      });

      res.json({ user });
    } catch (error) {
      res.status(400).json({
        error,
      });
    }
  },

  update: async function (req, res) {
    try {
      let id = req.params.id;
      let { firstName, lastName, email, phone, password, address } = req.body;
      if (
        validator.validate(email) &&
        firstName.length > 1 &&
        lastName.length > 1 &&
        email.length > 1 &&
        password.length > 1 &&
        phone.length > 1 &&
        address.length > 1
      ) {
        const user = await User.findByPk(id);
        await user.update({
          firstName,
          lastName,
          email,
          phone,
          address,
          password: hashPassword(password),
        });
        res.json({
          ok: true,
        });
      } else {
        res.status(500).json("Error updating 1");
      }
    } catch (error) {
      console.log(error);
      res.status(500).json("Error updating 2");
    }
  },

  updateUserAdmin: async function (req, res) {
    try {
      let id = req.params.id;
      let { role, isActive } = req.body;
      const user = await User.findByPk(id);
      await user.update({
        role,
        isActive,
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
