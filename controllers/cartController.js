const { OrderProduct, Order } = require("../models/index");

module.exports = {
  createOrder: async function (req, res) {
    try {
      console.log("hola");
      let { user } = req.body;
      let { cart } = req.body;
      let totalPrice = 0;
      // let products = [];
      for (let i = 0; i < cart.length; i++) {
        totalPrice += cart[i].price * cart[i].quantity;
      }
      await Order.create({
        userId: user.userId,
        status: 2,
        totalPrice,
      });
      res.json({ ok: true });
      // await OrderProduct.bulkCreate(products);
    } catch (err) {
      console.log("chau");
      res.status(400).json({ err });
    }
  },
};
