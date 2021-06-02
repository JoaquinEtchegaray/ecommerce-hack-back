// const { User } = require("../models");
// async function checkAdmin(req, res, next) {
//   let { id } = req.query;
//   console.log("este es el", id);
//   const user = await User.findByPk(id);

//   if (user.role === "admin") {
//     next();
//   } else {
//     res.json({
//       ok: false,
//     });
//   }
// }

// module.exports = checkAdmin;

const { User } = require("../models");

module.exports = async (req, res, next) => {
  try {
    let { id } = req.query;
    const userDB = await User.findByPk(id);
    if (userDB.role === "admin") {
      next();
    } else {
      res.json({
        ok: false,
      });
    }
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};
