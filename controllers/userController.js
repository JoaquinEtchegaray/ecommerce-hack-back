const { User } = require("../models/index");
const validator = require("email-validator");
// const formidable = require("formidable");

module.exports = {
  //user update

  showUsers: async function (req, res) {
    const users = await User.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.json({ users });
  },

  updateUser: async function (req, res) {
    try {
      let id = req.params.id; //viene username o viene id?
      let { firstName, lastName, email, phone, password } = req.body;
      if (
        validator.validate(email) &&
        firstname.length > 1 &&
        lastname.length > 1 &&
        phone.length > 1
      ) {
        const user = await User.findByPk(id);
        await user.update({
          firstName,
          lastName,
          email,
          phone,
          password,
        });
        res.json({
          ok: true,
        });
      } else {
        res.status(400).json("Error updating");
      }
    } catch (error) {
      res.status(404).json({
        error,
      });
    }
  },
  //admin update
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
