const hashPassword = require("../hashPassword/hashPassword");
const { User } = require("../models/index");
const jwt = require("jsonwebtoken");

module.exports = {
  store: async function (req, res) {
    const { firstName, lastName, userName, email, address, phone, password } =
      req.body;
    const user = await User.findOne({ where: { userName: userName } });
    if (user) {
      res.json({
        error: "Ya existe usuario con este userName",
      });
    } else {
      try {
        const userSaved = await User.create({
          firstName,
          lastName,
          userName,
          email,
          // address,
          // phone,
          password: hashPassword(password),
        });
        console.log("Se registró el usuario");
        let token = jwt.sign(
          {
            userName,
            email,
            userId: userSaved.id,
          },
          process.env.SECRET_TEXT
        );
        res.json({
          userId: userSaved.id,
          userName: userSaved.userName,
          role: userSaved.role,
          token,
        });
      } catch (err) {
        let error = err.message;
        res.status(400).json({
          error,
        });
      }
    }
  },
};
